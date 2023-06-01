export function useReposAPI() {
  const getRequestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }
  const fetchReposAPI = async (language: string) => {
    if (!language) return
    const API = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`

    const response = await fetch(API, getRequestOptions)
    return response
  }

  return {
    fetchReposAPI,
  }
}
