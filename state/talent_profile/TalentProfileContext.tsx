import { createContext, useReducer } from "react"
import { talentProfileReducer } from "./talentProfileReducer"
import {
  ITalentProfile,
  ITalentProfileContext,
  TalentProfileState,
} from "./talentProfile.types"

export const TalentProfileContext = createContext({} as ITalentProfileContext)

const TalentProfile = () => {
  const initialState: TalentProfileState = {
    data: {} as ITalentProfile,
    loading: false,
    error: "",
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
  searching: true,
  skills: [
    { id: "1", name: "NLP", level: 3 },
    { id: "2", name: "Pytorch", level: 2 },
    { id: "3", name: "Python", level: 2 },
  ],
  socials: ["https://linkedin.com", "https://github.com", "https://link.com"],
  preferences: {
    location: { id: "1", name: "London" },
  },
}
