import { IIndustry } from "../../state/industry/industry.types"
import { Database } from "../_supabase/database"

type PermissionTypes = "write" | "read"
type AccessLevel = "company" | "team"

interface CompanyProfile {
  name: string
  year_founded: string
  logo: string
  website: string
  size: string
  mission: string
  industry: IIndustry[]
}
export interface CreateCompanyPayload extends CompanyProfile {
  email: string
}

export type UpdateCompanyProfilePayload =
  Database["public"]["Tables"]["company"]["Update"]
export interface InviteCompanyMemberPayload {
  email: string
  companyId: string
  jobId?: string
  permission: PermissionTypes
  accessLevel: AccessLevel
}
export type UpdateCompanyMemberProfile =
  Database["public"]["Tables"]["company_member_profile"]["Insert"]
