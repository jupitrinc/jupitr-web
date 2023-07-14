type PermissionTypes = "write" | "read"
type AccessLevel = "company" | "job" | "team"
export interface CreateCompanyPayload {
  name: string
  email: string
  yearFounded: string
  logo: string
  website: string
  size: number
  mission: string
  teamName: string
  industry: string[]
}

export interface InviteCompanyMemberPayload {
  email: string
  companyId: string
  jobId?: string
  permission: PermissionTypes
  accessLevel: AccessLevel
}
