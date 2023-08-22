import { createContext, useMemo, useReducer } from "react"
import { companyProfileReducer } from "./skillReducer"
import { ISkillContext, SkillState } from "./skill.types"
import { ISkill } from "state/talent_profile/talentProfile.types"

export const SkillContext = createContext({} as ISkillContext)

export const SkillContextProvider: React.FC<any> = ({ children }) => {
  const initialState: SkillState = {
    data: [] as ISkill[],
    loading: false,
    error: "",
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  const value = useMemo(() => {
    return { state, dispatch }
  }, [state])

  return <SkillContext.Provider value={value}>{children}</SkillContext.Provider>
}
