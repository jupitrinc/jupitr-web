import { useContext } from "react"
import { useRouter } from "next/router"
import { IUser, UserActionEnum } from "./user.types"
import { UserContext } from "./UserContextProvider"
import useAuthService from "services/auth/useAuthService"
import userService from "services/user/userService"
import {
  MediaPayload,
  StorageBucketsEnum,
} from "../../services/storage/media.types"
import mediaService from "../../services/storage/mediaService"
import { localStorageHelper } from "../../helper/localStorageHelper"
import { cookieHelper } from "helper/cookieHelper"
import { imageHelper } from "helper/imageHelper"
import { storageFolderHelper } from "helper/storageFolderHelper"
import { useNotificationAction } from "state/notification/useNotificationAction"
import { gaEvent } from "helper/libs/google-analytics/events/gaEvent"
import { ICity } from "state/location/location.types"

export function useUserAction() {
  const { notify } = useNotificationAction()

  const { clear } = localStorageHelper
  const { deleteAllCookies } = cookieHelper

  const router = useRouter()
  const { dispatch } = useContext(UserContext)
  const { uploadImage } = mediaService()
  const {
    signInWithOtp,
    signInWithGoogle: signInWithGoogleService,
    signOut: signOutService,
    deleteAccount: deleteAccountService,
    changeEmail: changeEmailService,
  } = useAuthService()
  const { getUser: getUserService, updateUser } = userService()

  const signInWithEmail = async (email: string) => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithOtp(email)
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })

      notify({
        message: error.message,
        type: "warning",
      })
    } else {
      dispatch({
        type: UserActionEnum.SIGN_IN_SUCCESS,
      })

      notify({
        message: "Sign in using the link sent to your inbox",
        type: "info",
      })
    }
  }

  const signInWithGoogle = async () => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithGoogleService()
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE })

      notify({
        message: error.message,
        type: "warning",
      })
    } else {
      dispatch({
        type: UserActionEnum.SIGN_IN_SUCCESS,
      })
    }
  }

  const getUser = async (token: string) => {
    dispatch({ type: UserActionEnum.GET_USER_BEGIN })
    const { data, error } = await getUserService(token)
    if (error) {
      dispatch({
        type: UserActionEnum.GET_USER_FAILURE,
      })

      notify({
        message: error.message,
        type: "warning",
      })
    } else {
      dispatch({
        type: UserActionEnum.GET_USER_SUCCESS,
        payload: data,
      })
    }
  }

  const setUser = (user: IUser) => {
    dispatch({ type: UserActionEnum.GET_USER_BEGIN })

    dispatch({
      type: UserActionEnum.GET_USER_SUCCESS,
      payload: user,
    })
  }

  const signOut = async () => {
    dispatch({
      type: UserActionEnum.SIGN_OUT,
    })
    clear()
    deleteAllCookies()
    await signOutService()
    router.push("/login")
  }

  const updateName = async (id: string, name: string) => {
    if (!id) return

    const { data } = await updateUser(id, { name: name.trim() })

    if (data) {
      dispatch({
        type: UserActionEnum.UPDATE_NAME,
        payload: data.name,
      })
    }
  }

  const updateLocation = async (id: string, city: ICity) => {
    if (!id || !city.id) return

    const { data } = await updateUser(id, { location: city })

    if (data) {
      dispatch({
        type: UserActionEnum.UPDATE_LOCATION,
        payload: data.location,
      })
    }
  }

  const requestEmailUpdate = async (email: string) => {
    dispatch({
      type: UserActionEnum.REQUEST_EMAIL_UPDATE_BEGIN,
    })
    const { error } = await changeEmailService(email)
    if (error) {
      dispatch({
        type: UserActionEnum.REQUEST_EMAIL_UPDATE_FAILURE,
      })

      notify({
        message: error.message,
        type: "warning",
      })
    } else {
      dispatch({
        type: UserActionEnum.REQUEST_EMAIL_UPDATE_SUCCESS,
      })

      notify({
        message: "Check your inbox and confirm your email update request.",
        type: "info",
      })

      signOut()
    }
  }

  const updateEmail = async (id: string, email: string) => {
    dispatch({
      type: UserActionEnum.UPDATE_EMAIL_BEGIN,
    })

    const { error } = await updateUser(id, { email: email })
    if (error) {
      dispatch({
        type: UserActionEnum.UPDATE_EMAIL_FAILURE,
      })

      notify({
        message: error.message,
        type: "warning",
      })
    } else {
      dispatch({
        type: UserActionEnum.UPDATE_EMAIL_SUCCESS,
        payload: email,
      })
    }
  }

  const toggleActive = async (id: string, active: boolean) => {
    if (!id) return

    const { data } = await updateUser(id, { active: !active })

    if (data) {
      dispatch({
        type: UserActionEnum.TOGGLE_ACTIVE,
        payload: data.active,
      })
      if (!data.active) {
        signOut()

        notify({
          message: "Account paused",
          type: "info",
        })

        gaEvent("account_paused", {
          category: "user",
        })
      }
    }
  }

  const updateAvatar = async (file: MediaPayload["file"], userId: string) => {
    const fileExt = file.name.split(".").pop()
    const fileName = `${userId}.${fileExt}`
    const filePath = `${storageFolderHelper.userAvatarFolder(
      userId
    )}/${fileName}&updated=${Date.now()}`
    const resizedFile = await imageHelper.resize(file)
    uploadImage({
      bucketName: StorageBucketsEnum.images,
      file: resizedFile,
      filePath,
    }).then(({ data }) => {
      if (data?.path) {
        updateUser(userId, {
          avatar_url: data?.path,
        }).then(({ data }) => {
          if (data) {
            dispatch({
              type: UserActionEnum.UPDATE_AVATAR,
              payload: data.avatar_url,
            })
          }
        })
      }
    })
  }

  const deleteAccount = async () => {
    dispatch({
      type: UserActionEnum.DELETE_USER_BEGIN,
    })

    const { error } = await deleteAccountService()
    if (error) {
      dispatch({
        type: UserActionEnum.DELETE_USER_FAILURE,
        payload: error.message,
      })
    } else {
      dispatch({
        type: UserActionEnum.DELETE_USER_SUCCESS,
      })

      signOut()

      notify({
        message: "Account deleted",
        type: "info",
      })

      gaEvent("account_deleted", {
        category: "user",
      })
    }
  }
  const updateUsername = async (
    id: IUser["id"],
    username: IUser["username"]
  ) => {
    if (!id || !username) return

    const { data, error } = await updateUser(id, { username })
    if (data) {
      dispatch({
        type: UserActionEnum.UPDATE_USERNAME,
        payload: data.username,
      })

      notify({
        message: "Username updated",
        type: "success",
      })
    }
    if (error) {
      notify({
        message: "Username update failed",
        type: "warning",
      })
    }
  }

  return {
    signInWithEmail,
    signInWithGoogle,
    signOut,
    getUser,
    setUser,
    updateName,
    updateLocation,
    requestEmailUpdate,
    updateEmail,
    updateAvatar,
    toggleActive,
    deleteAccount,
    updateUsername,
  }
}
