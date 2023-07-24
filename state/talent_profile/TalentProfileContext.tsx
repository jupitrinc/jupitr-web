import { createContext, useReducer } from "react"

import { talentProfileReducer } from "./talentProfileReducer"
import {
  ITalentProfile,
  ITalentProfileContext,
  TalentProfileState,
} from "./talentProfile.types"
import { supabase } from "../../services/_supabase/client"

export const TalentProfileContext = createContext({} as ITalentProfileContext)

const TalentProfile = () => {
  const initialState: TalentProfileState = {
    data: test_data as ITalentProfile,
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
    work_model: ["Remote"],
    min_salary: 80000,
    industry: ["Finance", "Biotech", "Media", "AI"],
    technical_test: [
      "Online challenge",
      "Take-home challenge",
      "Pair programming",
      "None",
    ],
  },
}
