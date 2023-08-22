import { supabaseClientComponent } from "services/_supabase/client"

const SKILLS_TABLE = "skills"

const useSkillsService = () => {
  const getAllSkills = async () => {
    const { data, error } = await supabaseClientComponent
      .from(SKILLS_TABLE)
      .select("*")
      .order("name", { ascending: true })

    if (error) {
      console.error("failed to get skills: ", error)
    }

    return { data, error }
  }

  const searchSkills = async (name: string) => {
    const { data, error } = await supabaseClientComponent
      .from(SKILLS_TABLE)
      .select("*")
      .ilike("name", `%${name}%`)

    if (error) {
      console.error("search skills: ", error)
    }

    return { data, error }
  }
  const addSkill = async (name: string) => {
    const { data, error } = await supabaseClientComponent
      .from(SKILLS_TABLE)
      .insert({ name })
      .select()
      .single()

    if (error) {
      console.error("failed to add skill: ", error)
    }

    return { data, error }
  }
  return { getAllSkills, searchSkills, addSkill }
}

export default useSkillsService
