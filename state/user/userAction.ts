import { useContext } from "react"
import { UserActionEnum } from "./user.types"
import { UserContext } from "./UserContextProvider"

export function userAction() {
  const { dispatch } = useContext(UserContext)

  const get = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: UserActionEnum.GET_USER_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: UserActionEnum.GET_USER_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: UserActionEnum.GET_USER_SUCCESS,
              payload: data.items,
            })
          }
        }
      } */
    } catch (error) {
      catchError(error as string)
    }
  }

  const signOut = () => {
    dispatch({
      type: UserActionEnum.SIGN_OUT_USER,
    })
  }

  return {
    get,
    signOut,
  }
}
