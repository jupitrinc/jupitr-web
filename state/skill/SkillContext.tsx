import { createContext, useReducer } from "react"

import { companyProfileReducer } from "./skillReducer"
import { ISkillContext, SkillState } from "./skill.types"
import { ISkill } from "state/talent_profile/talentProfile.types"

export const SkillContext = createContext({} as ISkillContext)

const Skill = () => {
  const initialState: SkillState = {
    data: test_data as ISkill[],
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyProfileReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const SkillContextProvider: React.FC<any> = ({ children }) => {
  return (
    <SkillContext.Provider value={Skill()}>{children}</SkillContext.Provider>
  )
}

const test_data = [
  { id: "1", name: "Javascript", level: 3 },
  { id: "2", name: "React", level: 2 },
  { id: "1", name: "Frontend tooling", level: 1 },
  { id: "4", name: "Javascript", level: 3 },
  { id: "5", name: "React", level: 2 },
  { id: "6", name: "Frontend tooling", level: 1 },
]
