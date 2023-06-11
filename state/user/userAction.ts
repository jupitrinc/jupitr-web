import { useContext } from "react"
import { UserActionEnum } from "./user.types"
import { UserContext } from "./UserContext"

export function UserAction() {
  const { dispatch } = useContext(UserContext)

  const getUser = async (language: string) => {
    if (!language) return

    const catchError = (errorMessage: string) => {
      dispatch({
        type: UserActionEnum.FETCH_USER_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: UserActionEnum.FETCH_USER_BEGIN,
      })

      /* const response = await fetchRepos(language)
      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: UserActionEnum.FETCH_USER_SUCCESS,
              payload: data.items,
            })
          }
        }
      } */
    } catch (error) {
      catchError(error as string)
    }
  }

  return {
    getUser,
  }
}
