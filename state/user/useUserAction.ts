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
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"
import { localStorageHelper } from "../../helper/localStorageHelper"
import { toBase64, imageHelper } from "../../helper/imageHelper"

export function useUserAction() {
  const router = useRouter()
  const { dispatch } = useContext(UserContext)
  const { clear } = localStorageHelper
  const { uploadMedia } = useMediaService()
  const {
    signInWithOtp,
    signInWithGoogle: signInWithGoogleService,
    signOut: signOutService,
    deleteAccount: deleteAccountService,
    changeEmail: changeEmailService,
  } = useAuthService()
  const { getUser: getUserService, updateUser } = useUserService()
  const { addCompany } = useCompanyService()

  const { updateLogo } = useCompanyProfileAction()

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

    const resizedFile = await imageHelper.resize(company.logo)
    const base64File = await toBase64(resizedFile)
    const { error } = await addCompany({ ...company, logo: base64File })

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
    await signOutService()
    clear()
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

    const { error } = await updateUser({ id, email })
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
