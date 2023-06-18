import { createContext, useReducer } from "react"

import { talentProfileReducer } from "./talentProfileReducer"
import {
  ITalentProfileContext,
  TalentProfileStateType,
  TalentProfileType,
} from "./talentProfile.types"

export const TalentProfileContext = createContext({} as ITalentProfileContext)

const TalentProfile = () => {
  const initialState: TalentProfileStateType = {
    data: test_data as TalentProfileType,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(talentProfileReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const TalentProfileContextProvider: React.FC<any> = ({ children }) => {
  return (
    <TalentProfileContext.Provider value={TalentProfile()}>
      {children}
    </TalentProfileContext.Provider>
  )
}

const test_data = {
  user_id: "test1d",
  active: true,
  skills: [
    { id: "1", name: "NLP", level: 3 },
    { id: "2", name: "Pytorch", level: 2 },
    { id: "3", name: "Python", level: 2 },
  ],
  social_links: [
    "https://linkedin.com",
    "https://github.com",
    "https://link.com",
  ],
  preferences: {
    location: ["UK"],
    work_model: ["remote"],
    min_salary: 80000,
    industry: ["Finance", "Biotech", "Media", "AI"],
    technical_test: [
      "Online challenge",
      "Take-home challenge",
      "Pair programming",
      "None",
    ],
    visa_sponsorship: false,
    job_category: [
      "AI engineer",
      "Python developer",
      "Machine learning engineer",
    ],
  },
}
