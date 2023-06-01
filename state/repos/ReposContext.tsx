import { createContext, useReducer } from "react"
import { reposContextType, ReposSortEnum, reposStateType } from "./repos.types"
import { reposReducer } from "./reposReducer"

export const ReposContext = createContext({} as reposContextType)

const useRepos = () => {
  const initialState: reposStateType = {
    data: [],
    loading: false,
    error: false,
    sortBy: ReposSortEnum.MOST_STARS,
  }
  const [state, dispatch] = useReducer(reposReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const ReposContextProvider: React.FC<any> = ({ children }) => {
  return (
    <ReposContext.Provider value={useRepos()}>{children}</ReposContext.Provider>
  )
}
