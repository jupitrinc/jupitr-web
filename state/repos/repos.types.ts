export interface reposContextType {
  state: reposStateType
  dispatch: ({ type }: reposActionType) => void
}

export type repoType = {
  id: number
  full_name: string
  description: string
  watchers: number
  html_url: string
  language: string
  topics: string[]
  created_at: string
}

export interface reposStateType {
  data: repoType[]
  loading: boolean
  error: boolean
  sortBy: string
}

export interface reposActionType {
  type:
    | ReposActionEnum.FETCH_REPOS_BEGIN
    | ReposActionEnum.FETCH_REPOS_FAILURE
    | ReposActionEnum.FETCH_REPOS_SUCCESS
    | ReposActionEnum.RESET_REPOS
    | ReposActionEnum.SORT_REPOS
  payload?: unknown[] | string
}

export enum ReposActionEnum {
  FETCH_REPOS_BEGIN = "FETCH_REPOS_BEGIN",
  FETCH_REPOS_FAILURE = "FETCH_REPOS_FAILURE",
  FETCH_REPOS_SUCCESS = "FETCH_REPOS_SUCCESS",
  RESET_REPOS = "RESET_REPOS",
  SORT_REPOS = "SORT_REPOS",
}

export enum ReposSortEnum {
  MOST_STARS = "most_stars",
  RECENTLY_ADDED = "recently_added",
}
