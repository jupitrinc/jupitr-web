import { useContext } from "react"
import { useRouter } from "next/router"
import { IUser, UserActionEnum } from "./user.types"
import { UserContext } from "./UserContextProvider"
import useAuthService from "services/auth/useAuthService"
import useUserService from "services/user/useUserService"
import {
  LocalStorageHelper,
  LocalStorageItemEnum,
} from "helper/localStorageHelper"
import { MediaPayload } from "../../services/storage/media.types"
import useMediaService from "../../services/storage/useMediaService"

export function useUserAction() {
  const { dispatch } = useContext(UserContext)
  const router = useRouter()
  const { updateMedia, uploadMedia } = useMediaService()
  const {
    signInWithOtp,
    signInWithGoogle: signInWithGoogleService,
    signOut: signOutService,
  } = useAuthService()
  const { getUser: getUserService, updateUser } = useUserService()
  const { setItem, removeItem, getItem } = LocalStorageHelper

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
      setItem(LocalStorageItemEnum.user, data)
      dispatch({
        type: UserActionEnum.GET_USER_SUCCESS,
        payload: data,
      })
    }
  }

  const setUser = (user: IUser) => {
    setItem(LocalStorageItemEnum.user, user)
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
    removeItem(LocalStorageItemEnum.user)
    router.push("/")
  }

  const updateName = async (id: string, name: string) => {
    const { data, error } = await updateUser({ id: id, name: name })

    if (data) {
      setItem(LocalStorageItemEnum.user, {
        ...getItem("user"),
        name,
      })
      dispatch({
        type: UserActionEnum.UPDATE_NAME,
        payload: data.name,
      })
    }
  }
  const updateAvatar = async (payload: MediaPayload, userId: string) => {
    const { data, error } = await updateMedia({
      ...payload,
      bucketName: "avatars",
    })
    if (data) {
      await updateUser({
        id: userId,
        avatar_url: data.url,
      })
      setItem(LocalStorageItemEnum.user, {
        ...getItem("user"),
        avatar_url: data.url,
      })
      dispatch({
        type: UserActionEnum.UPDATE_AVATAR,
        payload: data.url,
      })
    }
    if (error) {
      console.error("updateAvatar -> error", error)
    }
  }
  const uploadAvatar = async (payload: MediaPayload, userId: string) => {
    const { data, error } = await uploadMedia({
      ...payload,
      bucketName: "avatars",
    })
    if (data) {
      await updateUser({
        id: userId,
        avatar_url: data.url,
      })
      setItem(LocalStorageItemEnum.user, {
        ...getItem("user"),
        avatar_url: data.url,
      })
      dispatch({
        type: UserActionEnum.UPDATE_AVATAR,
        payload: data.url,
      })
    }
    if (error) {
      console.error("uploadAvatar -> error", error)
    }
  }
  return {
    signInWithEmail,
    signInWithGoogle,
    signOut,
    getUser,
    setUser,
    updateName,
    updateAvatar,
    uploadAvatar,
  }
}
