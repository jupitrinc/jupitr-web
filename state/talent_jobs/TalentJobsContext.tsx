import { createContext, useReducer } from "react"

import { talentJobsReducer } from "./talentJobsReducer"
import {
  TalentJobs,
  ITalentJobsContext,
  TalentJobsState,
} from "./talentJobs.types"

export const TalentJobsContext = createContext({} as ITalentJobsContext)

const TalentJobs = () => {
  const initialState: TalentJobsState = {
    data: test_data as TalentJobs,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(talentJobsReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const TalentJobsContextProvider: React.FC<any> = ({ children }) => {
  return (
    <TalentJobsContext.Provider value={TalentJobs()}>
      {children}
    </TalentJobsContext.Provider>
  )
}

const sample_job_1 = {
  id: "1",
  title: "Senior frontend developer",
  salary: 110000,
  currency: "",
  location: "london",
  work_model: ["Remote", "Hybrid"],
  interview_steps: [
    "Initial call with HR",
    "Tech test with our developers",
    "An informal chat with the team",
  ],
  videos: [
    {
      id: "123",
      job_id: "123",
      company_member_profile: {
        user_id: "123",
        name: "Rafa",
        job_title: "Software engineer",
      },

      video_url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
  ],
  technical_test: [
    "Pair programming",
    "Technical conversation",
    "Take-home challenge",
  ],
  skills: [
    { id: "1", name: "Javascript", level: 3 },
    { id: "2", name: "React", level: 2 },
    { id: "1", name: "Frontend tooling", level: 1 },
    { id: "4", name: "Javascript", level: 3 },
    { id: "5", name: "React", level: 2 },
    { id: "6", name: "Frontend tooling", level: 1 },
  ],
  talent_response_video: {
    length: 20,
    description: "Why are you a good match for this role?",
  },
  active: true,
  company: {
    id: "123",
    name: "Meta",
    logo: "data:image/jpeg;base64,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",
    year_founded: "2023",
    website: "https://jupitr.tech",
    size: "1-5",
    mission: "",
    industry: ["Social media", "AI", "Metaverse"],
  },
  date_posted: "2023-06-11 18:13:59.232382+00",
}

const sample_job_2 = {
  id: "2",
  title: "Machine learning engineer",
  salary: 110000,
  currency: "",
  location: "london",
  work_model: ["Remote", "Hybrid"],
  interview_steps: [
    "Initial call with HR",
    "Tech test with our developers",
    "An informal chat with the team",
  ],
  videos: [
    {
      id: "123",
      job_id: "123",
      company_member_profile: {
        user_id: "123",
        name: "Rafa",
        job_title: "AI engineer",
      },

      video_url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
    },
  ],
  technical_test: [
    "Pair programming",
    "Technical conversation",
    "Take-home challenge",
  ],
  skills: [
    { id: "1", name: "NLP", level: 3 },
    { id: "2", name: "Python", level: 3 },
    { id: "1", name: "Computer Vision", level: 3 },
  ],
  talent_response_video: {
    length: 20,
    description: "Why are you a good match for this role?",
  },
  active: true,
  company: {
    id: "123",
    name: "Tesla",
    logo: "data:image/png;base64,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",
    year_founded: "2023",
    website: "https://jupitr.tech",
    size: "1-5",
    mission: "",
    industry: ["Automobile", "AI"],
  },
  date_posted: "2023-06-11 18:13:59.232382+00",
}

const test_data = [
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
  sample_job_1,
  sample_job_2,
]
