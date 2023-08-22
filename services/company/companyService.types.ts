import { IIndustry } from "../../state/industry/industry.types"
import { Database } from "../_supabase/database"

export type PermissionTypes = "write" | "read"
export type AccessLevel = "company"

interface CompanyProfile {
  name: string
  year_founded: string
  logo: File | string
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
  permission: PermissionTypes
}
export type UpdateCompanyMemberProfile =
  Database["public"]["Tables"]["company_member_profile"]["Insert"]
