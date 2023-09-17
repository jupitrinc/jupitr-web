import { IIndustry } from "../../state/industry/industry.types"
import { Database } from "../_supabase/database"

export type PermissionTypes = "write" | "read"
export type AccessLevel = "company"

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
  redirectTo: string
}

export type UpdateCompanyProfilePayload =
  Database["public"]["Tables"]["company"]["Update"]
export interface InviteCompanyMemberPayload {
  email: string
  company_id: string
  permission: PermissionTypes
  redirectTo?: string
}
export type UpdateCompanyMemberProfile =
  Database["public"]["Tables"]["company_member_profile"]["Insert"]
