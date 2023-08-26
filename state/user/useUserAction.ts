import { useContext } from "react"
import { useRouter } from "next/router"
import { IUser, UserActionEnum } from "./user.types"
import { UserContext } from "./UserContextProvider"
import useAuthService from "services/auth/useAuthService"
import useUserService from "services/user/useUserService"
import {
  MediaPayload,
  StorageBucketsEnum,
} from "../../services/storage/media.types"
import useMediaService from "../../services/storage/useMediaService"
import { AddCompany } from "state/company_profile/companyProfile.types"
import useCompanyService from "services/company/useCompanyService"
import { localStorageHelper } from "../../helper/localStorageHelper"
import { cookieHelper } from "helper/cookieHelper"
import { imageHelper } from "helper/imageHelper"
import { storageFolderHelper } from "helper/storageFolderHelper"

export function useUserAction() {
  const { clear } = localStorageHelper
  const { deleteAllCookies } = cookieHelper
  const { toBase64 } = imageHelper

  const router = useRouter()
  const { dispatch } = useContext(UserContext)
  const { uploadImage } = useMediaService()
  const {
    signInWithOtp,
    signInWithGoogle: signInWithGoogleService,
    signOut: signOutService,
    deleteAccount: deleteAccountService,
    changeEmail: changeEmailService,
  } = useAuthService()
  const { getUser: getUserService, updateUser } = useUserService()
  const { addCompany } = useCompanyService()

  const signInWithEmail = async (email: string) => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithOtp(email)
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE, payload: error.message })
    } else {
      dispatch({
        type: UserActionEnum.SIGN_IN_SUCCESS,
      })
    }
  }

  const signInWithGoogle = async () => {
    dispatch({ type: UserActionEnum.SIGN_IN_BEGIN })
    const { error } = await signInWithGoogleService()
    if (error) {
      dispatch({ type: UserActionEnum.SIGN_IN_FAILURE, payload: error.message })
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
        payload: error.message,
      })
    } else {
      dispatch({
        type: UserActionEnum.GET_USER_SUCCESS,
        payload: data,
      })
    }
  }

  const setUser = (user: IUser) => {
    dispatch({
      type: UserActionEnum.GET_USER_SUCCESS,
      payload: user,
    })
  }

  const signUpCompany = async (company: AddCompany) => {
    dispatch({ type: UserActionEnum.COMPANY_SIGN_UP_BEGIN })

    const resizedFile = await imageHelper.resize(company.logo as File)
    const base64File = await toBase64(resizedFile)
    const { data, error } = await addCompany({ ...company, logo: base64File })

    if (error) {
      dispatch({
        type: UserActionEnum.COMPANY_SIGN_UP_FAILURE,
        payload: error.message.includes("non-2xx status")
          ? "You already have an account. Sign in"
          : error.message,
      })

      return null
    } else {
      dispatch({
        type: UserActionEnum.COMPANY_SIGN_UP_SUCCESS,
      })

      return company.email
    }
  }

  const signOut = async () => {
    dispatch({
      type: UserActionEnum.SIGN_OUT,
    })
    await signOutService()
    clear()
    deleteAllCookies()
    router.push("/")
  }

  const updateName = async (id: string, name: string) => {
    const { data, error } = await updateUser(id, { name: name })

    if (data) {
      dispatch({
        type: UserActionEnum.UPDATE_NAME,
        payload: data.name,
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
        payload: error.message,
      })
    } else {
      dispatch({
        type: UserActionEnum.REQUEST_EMAIL_UPDATE_SUCCESS,
        payload: email,
      })
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
        payload: error.message,
      })
    } else {
      dispatch({
        type: UserActionEnum.UPDATE_EMAIL_SUCCESS,
        payload: email,
      })
    }
  }

  const toggleActive = async (id: string, active: boolean) => {
    const { data, error } = await updateUser(id, { active: !active })

    if (data) {
      dispatch({
        type: UserActionEnum.TOGGLE_ACTIVE,
        payload: data.active,
      })
      if (!data.active) {
        signOut()
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
    }).then(({ data, error }) => {
      if (data?.path) {
        updateUser(userId, {
          avatar_url: data?.path,
        }).then(({ data, error }) => {
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
      clear()
      router.replace("/")
    }
  }

  return {
    signInWithEmail,
    signInWithGoogle,
    signOut,
    signUpCompany,
    getUser,
    setUser,
    updateName,
    requestEmailUpdate,
    updateEmail,
    updateAvatar,
    toggleActive,
    deleteAccount,
  }
}
