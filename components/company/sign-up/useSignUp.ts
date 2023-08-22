import { useCallback, useEffect, useState } from "react"
import { useUserAction } from "state/user/useUserAction"
import { AddCompany } from "state/company_profile/companyProfile.types"
import { useImagePreview } from "helper/hooks/useImagePreview"
import { useIndustryAction } from "state/industry/useIndustryAction"
import { useIndustryState } from "state/industry/useIndustryState"
import { IIndustry } from "state/industry/industry.types"

export const useSignUp = () => {
  const { signUpCompany } = useUserAction()

  const [company, setCompany] = useState<AddCompany>({
    name: "",
    logo: null,
    year_founded: "2023",
    mission: "",
    website: "",
    email: "",
    industry: [],
    size: "1-10",
  })

  const { preview: logoPreview } = useImagePreview(company.logo as string)

  const { getIndustries, clearIndustries } = useIndustryAction()
  const { industries } = useIndustryState()

  useEffect(() => {
    getIndustries()

    return () => {
      clearIndustries()
    }
  }, [])

  const addIndustry = (option: IIndustry) => {
    if (!company.industry.find((i) => i.id === option.id)) {
      setCompany({
        ...company,
        industry: [...company.industry, option],
      })
    }
  }

  const removeIndustry = (option: IIndustry) => {
    setCompany({
      ...company,
      industry: [...company.industry.filter((i) => i.id !== option.id)],
    })
  }

  const selectLogo = (e) => {
    if (e.target.files) {
      setCompany({ ...company, logo: e.target.files[0] })
    }
  }

  const [invalid, setInvalid] = useState({
    name: false,
    logo: false,
    year_founded: false,
    mission: false,
    website: false,
    email: false,
    industry: false,
    size: false,
  })

  const [validationFailed, setValidationFailed] = useState<boolean>(false)

  const validateCompany = useCallback(
    async (company: AddCompany) => {
      const fields = { ...invalid }

      fields.name = !company.name
      fields.logo = !company.logo
      fields.year_founded = !company.year_founded
      fields.mission = !company.mission
      fields.website = !company.website
      fields.email = !company.email
      fields.industry = company.industry.length < 1
      fields.size = !company.size

      setInvalid(fields)
      const isFailed = Object.values(fields).includes(true)

      setValidationFailed(isFailed)
      return isFailed
    },
    [company]
  )

  const addCompany = useCallback(
    async (e) => {
      e.preventDefault()

      const failed = await validateCompany(company)

      if (!failed) {
        signUpCompany(company)
      }
    },
    [company]
  )

  return {
    company,
    setCompany,
    invalid,
    validationFailed,
    logoPreview,
    industries,
    addIndustry,
    removeIndustry,
    selectLogo,
    addCompany,
  }
}
