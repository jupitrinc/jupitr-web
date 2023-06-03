import { useContext } from "react"
import { ReposContext } from "./ReposContext"
import { ReposActionEnum } from "./repos.types"
import { useReposService } from "services/useReposService"

export function useReposAction() {
  const { dispatch } = useContext(ReposContext)
  const { fetchRepos } = useReposService()

  const getRepos = async (language: string) => {
    if (!language) return

    const getReposFailed = (errorMessage: string) => {
      dispatch({
        type: ReposActionEnum.FETCH_REPOS_FAILURE,
      })

      console.log(errorMessage)
    }

    try {
      dispatch({
        type: ReposActionEnum.FETCH_REPOS_BEGIN,
      })

      const response = await fetchRepos(language)

      if (response) {
        if (!response.ok) {
          getReposFailed(`No repositories found for the keyword ${language} :(`)
        } else {
          const data = await response.json()
          if (data.items) {
            dispatch({
              type: ReposActionEnum.FETCH_REPOS_SUCCESS,
              payload: data.items,
            })
          }
        }
      }
    } catch (error) {
      getReposFailed(error as string)
    }
  }

  const sortRepos = (sortType: string) => {
    dispatch({
      type: ReposActionEnum.SORT_REPOS,
      payload: sortType,
    })
  }

  const resetRepos = () => {
    dispatch({
      type: ReposActionEnum.RESET_REPOS,
    })
  }

  return {
    getRepos,
    resetRepos,
    sortRepos,
  }
}
