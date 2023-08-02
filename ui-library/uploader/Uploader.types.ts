import { ReactNode } from "react"

export interface UploaderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  accept: FileType
  disabled?: boolean
  name?: string
  children: ReactNode
}

type FileType =
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "image/jpg, image/jpeg"
  | "image/jpg, image/png"
  | "image/jpg, image/jpeg, image/png"
