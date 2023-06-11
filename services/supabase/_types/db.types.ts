import { AccountType, PermissionType, ServiceLevelType } from "./account.types"

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      company: {
        Row: {
          id: number
          logo: string | null
          mission: string | null
          name: string | null
          size: number | null
          updated_at: string | null
          website: string | null
          yearfounded: string | null
        }
        Insert: {
          id?: number
          logo?: string | null
          mission?: string | null
          name?: string | null
          size?: number | null
          updated_at?: string | null
          website?: string | null
          yearfounded?: string | null
        }
        Update: {
          id?: number
          logo?: string | null
          mission?: string | null
          name?: string | null
          size?: number | null
          updated_at?: string | null
          website?: string | null
          yearfounded?: string | null
        }
        Relationships: []
      }
      company_member_profile: {
        Row: {
          companyid: number
          id: string
          jobtile: string | null
          roles: number
        }
        Insert: {
          companyid: number
          id: string
          jobtile?: string | null
          roles: number
        }
        Update: {
          companyid?: number
          id?: string
          jobtile?: string | null
          roles?: number
        }
        Relationships: [
          {
            foreignKeyName: "company_member_profile_companyid_fkey"
            columns: ["companyid"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_member_profile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_member_profile_roles_fkey"
            columns: ["roles"]
            referencedRelation: "company_member_roles"
            referencedColumns: ["id"]
          }
        ]
      }
      company_member_roles: {
        Row: {
          id: number
          permission: Database["public"]["Enums"]["permission_type"] | null
          servicelevel: Database["public"]["Enums"]["service_level_type"] | null
          userid: string
        }
        Insert: {
          id?: number
          permission?: Database["public"]["Enums"]["permission_type"] | null
          servicelevel?:
            | Database["public"]["Enums"]["service_level_type"]
            | null
          userid: string
        }
        Update: {
          id?: number
          permission?: Database["public"]["Enums"]["permission_type"] | null
          servicelevel?:
            | Database["public"]["Enums"]["service_level_type"]
            | null
          userid?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_member_roles_userid_fkey"
            columns: ["userid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      company_teams: {
        Row: {
          companyid: number
          id: number
          teamname: string | null
        }
        Insert: {
          companyid: number
          id?: number
          teamname?: string | null
        }
        Update: {
          companyid?: number
          id?: number
          teamname?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_teams_companyid_fkey"
            columns: ["companyid"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          }
        ]
      }
      talent_profile: {
        Row: {
          icon_url: string | null
          id: string
          jobs: Json | null
          new_profile: boolean | null
          preferences: Json | null
          social_media: Json | null
          status: string | null
          talent_skills: Json | null
          updated_at: string | null
        }
        Insert: {
          icon_url?: string | null
          id: string
          jobs?: Json | null
          new_profile?: boolean | null
          preferences?: Json | null
          social_media?: Json | null
          status?: string | null
          talent_skills?: Json | null
          updated_at?: string | null
        }
        Update: {
          icon_url?: string | null
          id?: string
          jobs?: Json | null
          new_profile?: boolean | null
          preferences?: Json | null
          social_media?: Json | null
          status?: string | null
          talent_skills?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "talent_profile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          accounttype: string | null
          avatar_url: string | null
          email: string | null
          id: string
          updated_at: string | null
        }
        Insert: {
          accounttype?: string | null
          avatar_url?: string | null
          email?: string | null
          id: string
          updated_at?: string | null
        }
        Update: {
          accounttype?: string | null
          avatar_url?: string | null
          email?: string | null
          id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      handle_new_company: {
        Args: {
          p_name: string
          p_year_founded: string
          p_logo: string
          p_website: string
          p_size: number
          p_mission: string
          p_team_name: string
          p_user_id: string
          p_permission: Database["public"]["Enums"]["permission_type"]
          p_service_level: Database["public"]["Enums"]["service_level_type"]
        }
        Returns: {
          company_id: number
          team_id: number
          role_id: number
        }[]
      }
      handle_new_company_member: {
        Args: {
          p_company_id: number
          p_user_id: string
          p_permission: Database["public"]["Enums"]["permission_type"]
          p_service_level: Database["public"]["Enums"]["service_level_type"]
        }
        Returns: {
          role_id: number
        }[]
      }
    }
    Enums: {
      account_types: AccountType
      permission_type: PermissionType
      service_level_type: ServiceLevelType
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
