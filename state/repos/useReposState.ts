import { useContext } from "react"
import { ReposSortEnum } from "./repos.types"
import { ReposContext } from "./ReposContext"

export const useReposState = () => {
  const { state } = useContext(ReposContext)

  return {
    repos:
      state.sortBy === ReposSortEnum.RECENTLY_ADDED
        ? state.data.sort(
            (objA, objB) =>
              new Date(objB.created_at).getTime() -
              new Date(objA.created_at).getTime()
          )
        : state.data.sort((objA, objB) => objB.watchers - objA.watchers),

    loading: state.loading,
    error: state.error,
    sortBy: state.sortBy,
    reposLanguage: state.data.length ? state.data[0].language : "",
    totalRepos: state.data.length,
  }
}
