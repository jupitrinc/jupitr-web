export function useReposService() {
  const getRequestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }
  const fetchRepos = async (language: string) => {
    if (!language) return
    const API = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`

    const response = await fetch(API, getRequestOptions)
    return response
  }

  return {
    fetchRepos,
  }
}
