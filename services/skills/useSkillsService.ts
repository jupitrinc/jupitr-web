import { supabaseClientComponent } from "services/_supabase/client"

const useSkillsService = () => {
  const getAllSkills = async () => {
    const { data, error } = await supabaseClientComponent
      .from("skills")
      .select("*")
      .order("name", { ascending: true })

    if (error) {
      console.error("failed to get skills: ", error)
    }

    return { data, error }
  }

  const searchSkills = async (name: string) => {
    const { data, error } = await supabaseClientComponent
      .from("skills")
      .select("*")
      .ilike("name", `%${name}%`)

    if (error) {
      console.error("search skills: ", error)
    }

    return { data, error }
  }
  const addSkill = async (name: string) => {
    const { data, error } = await supabaseClientComponent
      .from("skills")
      .insert({ name })

    if (error) {
      console.error("failed to add skill: ", error)
    }

    return { data, error }
  }
  return { getAllSkills, searchSkills, addSkill }
}

export default useSkillsService
