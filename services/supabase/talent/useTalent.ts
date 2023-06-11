import useGetProfile from "./useGetProfile"
import useUpdateProfile from "./useUpdateProfile"
export const useTalent = () => {
  return {
    useGetProfile,
    useUpdateProfile,
  }
}
