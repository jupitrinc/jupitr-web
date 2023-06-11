export enum AccountTypeEnum {
  talent = "talent",
  company = "company",
}

export enum PermissionTypeEnum {
  read = "read",
  write = "write",
}

export enum ServiceLevelTypeEnum {
  company = "company",
  job = "job",
  team = "team",
}

export type AccountType = "company" | "talent"
export type PermissionType = "read" | "write"
export type ServiceLevelType = "company" | "job" | "team"
