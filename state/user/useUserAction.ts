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

export function useUserAction() {
  const router = useRouter()
  const { dispatch } = useContext(UserContext)

  const { uploadMedia } = useMediaService()
  const {
    signInWithOtp,
    signInWithGoogle: signInWithGoogleService,
    signOut: signOutService,
  } = useAuthService()
  const { getUser: getUserService, updateUser } = useUserService()

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
  const updateAvatar = (
    file: MediaPayload["file"],
    filePath: MediaPayload["filePath"],
    userId: string
  ) => {
    uploadMedia({
      bucketName: StorageBucketsEnum.avatars,
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
    getUser,
    setUser,
    updateName,
    updateAvatar,
  }
}
