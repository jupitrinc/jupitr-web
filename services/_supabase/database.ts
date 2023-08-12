export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      company: {
        Row: {
          created_at: string | null
          id: string
          industry: Json | null
          logo: string | null
          mission: string | null
          name: string | null
          size: string | null
          updated_at: string | null
          website: string | null
          year_founded: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          industry?: Json | null
          logo?: string | null
          mission?: string | null
          name?: string | null
          size?: string | null
          updated_at?: string | null
          website?: string | null
          year_founded?: string | null
        }
        Update: {
          created_at?: string | null
          id: string
          industry?: Json | null
          logo?: string | null
          mission?: string | null
          name?: string | null
          size?: string | null
          updated_at?: string | null
          website?: string | null
          year_founded?: string | null
        }
        Relationships: []
      }
      company_member_profile: {
        Row: {
          company_id: string
          created_at: string | null
          job_title: string | null
          roles: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company_id?: string
          created_at?: string | null
          job_title?: string | null
          roles?: string
          updated_at?: string | null
          user_id?: string
        }
        Update: {
          company_id?: string
          created_at?: string | null
          job_title?: string | null
          roles?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_member_profile_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_member_profile_roles_fkey"
            columns: ["roles"]
            referencedRelation: "company_member_roles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_member_profile_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      company_member_roles: {
        Row: {
          company_id: string
          created_at: string | null
          id: string
          permission: Database["public"]["Enums"]["permission_type"] | null
          service_level:
            | Database["public"]["Enums"]["service_level_type"]
            | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company_id: string
          created_at?: string | null
          id?: string
          permission?: Database["public"]["Enums"]["permission_type"] | null
          service_level?:
            | Database["public"]["Enums"]["service_level_type"]
            | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company_id?: string
          created_at?: string | null
          id?: string
          permission?: Database["public"]["Enums"]["permission_type"] | null
          service_level?:
            | Database["public"]["Enums"]["service_level_type"]
            | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_member_roles_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_member_roles_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      talent_profile: {
        Row: {
          searching: boolean | null
          jobs: Json | null
          preferences: Json | null
          skills: Json | null
          socials: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          searching?: boolean | null
          jobs?: Json | null
          preferences?: Json | null
          skills?: Json | null
          socials?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          searching?: boolean | null
          jobs?: Json | null
          preferences?: Json | null
          skills?: Json | null
          socials?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "talent_profile_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          account_type: string | null
          active: boolean | null
          avatar_url: string | null
          email: string | null
          id: string
          name: string | null
          updated_at: string | null
        }
        Insert: {
          account_type?: string | null
          active?: boolean | null
          avatar_url?: string | null
          email?: string | null
          id: string
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          account_type?: string | null
          active?: boolean | null
          avatar_url?: string | null
          email?: string | null
          id?: string
          name?: string | null
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
          p_user_id: string
          p_permission: Database["public"]["Enums"]["permission_type"]
          p_service_level: Database["public"]["Enums"]["service_level_type"]
          p_industry: Json
        }
        Returns: {
          company_id: string
          role_id: string
        }[]
      }
      handle_new_company_member: {
        Args: {
          p_company_id: string
          p_user_id: string
          p_permission: Database["public"]["Enums"]["permission_type"]
          p_service_level: Database["public"]["Enums"]["service_level_type"]
        }
        Returns: {
          role_id: string
        }[]
      }
    }
    Enums: {
      account_types: "company" | "talent"
      permission_type: "read" | "write"
      service_level_type: "company" | "job" | "team"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
