export interface ICompanyMemberProfile {
  user_id: string
  job_title: string
  company_id: string
  permission: CompanyMemberPermission
}

export type CompanyMemberPermission = "read" | "write"

export enum CompanyMemberPermissionEnum {
  read = "read",
  write = "write",
}

export type CompanyMemberProfileAction = {
  type: CompanyMemberProfileActionEnum.UPDATE_JOB_TITLE

  payload?: ICompanyMemberProfile["job_title"]
}

export enum CompanyMemberProfileActionEnum {
  UPDATE_JOB_TITLE = "UPDATE_JOB_TITLE",
}
