import { supabase } from "services/_supabase/client"

const useRegisterCompanyServicer = () => {
  const registerCompany = async (payload) => {
    const { data, error } = await supabase.functions.invoke("create-company", {
      body: payload,
    })

    if (data) {
      return data
    }
    if (error) {
      console.error("create company: ", error)
    }
  }

  return { registerCompany }
}

export default useRegisterCompanyServicer
