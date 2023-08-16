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

export function useUserAction() {
  const router = useRouter()
  const { dispatch } = useContext(UserContext)

  const { uploadMedia } = useMediaService()
  const {
    signInWithOtp,
    signInWithGoogle: signInWithGoogleService,
    signOut: signOutService,
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

    // 1. upload the logo, get the url

    // 2. add the company
    const { data, error } = await addCompany({ ...company, logo: "logo-url" })

    // 3. sign in the user?
    if (error) {
      dispatch({
        type: UserActionEnum.COMPANY_SIGN_UP_FAILURE,
        payload: error.message,
      })
    } else {
      dispatch({
        type: UserActionEnum.COMPANY_SIGN_UP_SUCCESS,
      })
    }
  }

  const signOut = async () => {
    dispatch({
      type: UserActionEnum.SIGN_OUT,
    })
    signOutService()
    router.push("/")
  }

  const updateName = async (id: string, name: string) => {
    const { data, error } = await updateUser({ id: id, name: name })

    if (data) {
      dispatch({
        type: UserActionEnum.UPDATE_NAME,
        payload: data[0].name,
      })
    }
  }

  const requestEmailUpdate = async (email: string) => {
    dispatch({
      type: UserActionEnum.REQUEST_EMAIL_UPDATE_BEGIN,
    })

    const { data, error } = await changeEmailService(email)
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
    //TODO update Localstorage with new data
    await updateUser({ id, email })
  }

  const toggleActive = async (id: string, active: boolean) => {
    const { data, error } = await updateUser({ id, active: !active })

    if (data) {
      dispatch({
        type: UserActionEnum.TOGGLE_ACTIVE,
        payload: data[0].active,
      })
      if (!data[0].active) {
        signOut()
      }
    }
  }

  const updateAvatar = (
    file: MediaPayload["file"],
    filePath: MediaPayload["filePath"],
    userId: string
  ) => {
    uploadMedia({
      bucketName: StorageBucketsEnum.images,
      file,
      filePath,
    }).then(({ data, error }) => {
      if (data?.path) {
        updateUser({
          id: userId,
          avatar_url: data?.path,
        }).then(({ data, error }) => {
          if (data) {
            dispatch({
              type: UserActionEnum.UPDATE_AVATAR,
              payload: data[0].avatar_url,
            })
          }
        })
      }
    })
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
  }
}
