import { DBTableEnum } from "../_types/table.types"
import { supabase } from "../supabase"

const useGetProfile = async (userId: string) => {
  const { data, error } = await supabase
    .from(DBTableEnum.talent_profile)
    .select()
    .eq("id", userId)
    .single()
  if (data) {
    return data
  }
  if (error) {
    console.error("Failed to get talent profile: ", error)
  }
}
export default useGetProfile
