import useLogout from "./useLogout"
import useLogin from "./useLogin"
import useGetUserId from "./useGetUserId"

const useAuth = () => {
  return { useLogout, useLogin, useGetUserId }
}
export default useAuth
