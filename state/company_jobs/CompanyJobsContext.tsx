import { createContext, useReducer } from "react"

import { companyJobsReducer } from "./companyJobsReducer"
import {
  CompanyJobs,
  ICompanyJobsContext,
  CompanyJobsState,
} from "./companyJobs.types"

export const CompanyJobsContext = createContext({} as ICompanyJobsContext)

const CompanyJobs = () => {
  const initialState: CompanyJobsState = {
    data: test_data as CompanyJobs,
    loading: false,
    error: false,
  }
  const [state, dispatch] = useReducer(companyJobsReducer, initialState)

  return {
    state,
    dispatch,
  }
}

export const CompanyJobsContextProvider: React.FC<any> = ({ children }) => {
  return (
    <CompanyJobsContext.Provider value={CompanyJobs()}>
      {children}
    </CompanyJobsContext.Provider>
  )
}

const sample_application = {
  id: "1",
  job_id: "1",
  skills: [
    { id: "1", name: "Javascript", level: 3 },
    { id: "2", name: "React", level: 2 },
    { id: "1", name: "Frontend tooling", level: 1 },
    { id: "4", name: "Javascript", level: 3 },
    { id: "5", name: "React", level: 2 },
    { id: "6", name: "Frontend tooling", level: 1 },
  ],
  video_url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  talent_profile: {
    name: "Ava Adam",
    email: "ava@adam.com",
    social_links: ["github.com", "linkedin.com", "website.com"],
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80",
  },
}

export const sample_job = {
  id: "1",
  title: "Senior frontend developer",
  salary: 110000,
  currency: "",
  location: "london",
  work_model: ["Remote", "Hybrid"],
  visa_sponsorship: false,
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
    {
      id: "124",
      job_id: "123",
      company_member_profile: {
        user_id: "123",
        name: "Ismael",
        job_title: "Software engineer",
      },

      video_url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
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
  application_video: {
    duration: 20,
    description: "Why are you a good match for this role?",
  },
  status: "open",
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
  applications: [
    sample_application,
    { ...sample_application, id: "2" },
    { ...sample_application, id: "3" },
    { ...sample_application, id: "4" },
    { ...sample_application, id: "5" },
  ],
}

const test_data = [
  { ...sample_job, title: "Open jobs" },
  { ...sample_job, id: "2" },
  { ...sample_job, id: "3" },
  { ...sample_job, id: "4" },
  { ...sample_job, id: "5" },
  { ...sample_job, id: "6", status: "closed", title: "Closed jobs" },
  { ...sample_job, id: "7", status: "closed" },
  { ...sample_job, id: "8", status: "closed" },
  { ...sample_job, id: "9", status: "closed" },
  { ...sample_job, id: "10", status: "draft", title: "Draft jobs" },
  { ...sample_job, id: "11", status: "draft" },
]
