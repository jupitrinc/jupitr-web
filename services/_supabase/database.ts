import { ICity } from "state/location/location.types"

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type ProfileSections = "intro_video" | "skills" | "socials" | "location"

export type ProfileVisibility = {
  [K in ProfileSections]?: GenericVisibility
}

type GenericVisibility = {
  overall?: boolean
  details?: VisibilityDetail
}

type VisibilityDetail = { [key: string]: boolean }

export interface Database {
  public: {
    Tables: {
      applications: {
        Row: {
          created_at: string
          id: string
          job_id: string | null
          skills: Json | null
          status: string | null
          updated_at: string | null
          user_id: string | null
          video_url: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_id?: string | null
          skills?: Json | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          video_url: string
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string | null
          skills?: Json | null
          status?: string | null
          updated_at?: string | null
          user_id?: string | null
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "applications_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "applications_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
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
        Relationships: []
      }
      company_member_profile: {
        Row: {
          company_id: string | null
          created_at: string | null
          id: string
          job_title: string | null
          permission: Database["public"]["Enums"]["permission_type"] | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          job_title?: string | null
          permission?: Database["public"]["Enums"]["permission_type"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          company_id?: string | null
          created_at?: string | null
          id?: string
          job_title?: string | null
          permission?: Database["public"]["Enums"]["permission_type"] | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "company_member_profile_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_member_profile_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      company_videos: {
        Row: {
          created_at: string
          id: string
          job_id: string
          user_id: string | null
          video_url: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_id: string
          user_id?: string | null
          video_url: string
        }
        Update: {
          created_at?: string
          id?: string
          job_id?: string
          user_id?: string | null
          video_url?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_videos_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_videos_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      feedback: {
        Row: {
          created_at: string
          id: number
          message: string | null
          rating: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          message?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          message?: string | null
          rating?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "feedback_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      industry: {
        Row: {
          id: string
          name: string | null
        }
        Insert: {
          id?: string
          name?: string | null
        }
        Update: {
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      jobs: {
        Row: {
          application_video: Json | null
          company_id: string | null
          created_at: string
          id: string
          location: Json | null
          salary: string | null
          skills: Json | null
          status: string | null
          title: string | null
          updated_at: string | null
          "visa_sponsorshi[": boolean | null
          work_model: Json | null
        }
        Insert: {
          application_video?: Json | null
          company_id?: string | null
          created_at?: string
          id?: string
          location?: Json | null
          salary?: string | null
          skills?: Json | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          "visa_sponsorshi["?: boolean | null
          work_model?: Json | null
        }
        Update: {
          application_video?: Json | null
          company_id?: string | null
          created_at?: string
          id?: string
          location?: Json | null
          salary?: string | null
          skills?: Json | null
          status?: string | null
          title?: string | null
          updated_at?: string | null
          "visa_sponsorshi["?: boolean | null
          work_model?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_company_id_fkey"
            columns: ["company_id"]
            referencedRelation: "company"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          active: boolean | null
          alert: Database["public"]["Enums"]["alert_type"]
          created_at: string
          id: string
          interval: Database["public"]["Enums"]["interval_type"] | null
          type: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          active?: boolean | null
          alert: Database["public"]["Enums"]["alert_type"]
          created_at?: string
          id?: string
          interval?: Database["public"]["Enums"]["interval_type"] | null
          type?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          active?: boolean | null
          alert?: Database["public"]["Enums"]["alert_type"]
          created_at?: string
          id?: string
          interval?: Database["public"]["Enums"]["interval_type"] | null
          type?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      skills: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      talent_profile: {
        Row: {
          id: string
          preferences: Json | null
          searching: boolean | null
          skills: Json | null
          socials: Json | null
          updated_at: string | null
          user_id: string | null
          intro_video: string | null
          visibility?: ProfileVisibility | null
        }
        Insert: {
          id?: string
          preferences?: Json | null
          searching?: boolean | null
          skills?: Json | null
          socials?: Json | null
          updated_at?: string | null
          user_id?: string | null
          intro_video?: string | null
          visibility?: ProfileVisibility | null
        }
        Update: {
          id?: string
          preferences?: Json | null
          searching?: boolean | null
          skills?: Json | null
          socials?: Json | null
          updated_at?: string | null
          user_id?: string | null
          intro_video?: string | null
          visibility?: ProfileVisibility | null
        }
        Relationships: [
          {
            foreignKeyName: "talent_profile_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
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
          location?: ICity
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      handle_new_company:
        | {
            Args: {
              p_name: string
              p_year_founded: string
              p_logo: string
              p_website: string
              p_size: string
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
        | {
            Args: {
              p_name: string
              p_year_founded: string
              p_website: string
              p_size: string
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
        | {
            Args: {
              p_name: string
              p_year_founded: string
              p_website: string
              p_size: string
              p_mission: string
              p_user_id: string
              p_permission: Database["public"]["Enums"]["permission_type"]
              p_industry: Json
            }
            Returns: {
              company_id: string
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
      alert_type: "job_alert" | "collab_alert" | "applications_alert"
      interval_type: "daily" | "weekly"
      permission_type: "read" | "write"
      service_level_type: "company" | "job" | "team"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
