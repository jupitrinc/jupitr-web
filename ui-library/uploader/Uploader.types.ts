export interface UploaderProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  accept: FileType
  disabled?: boolean
  name?: string
}

type FileType =
  | "image/png"
  | "image/jpg"
  | "image/jpeg"
  | "image/jpg, image/jpeg"
  | "image/jpg, image/png"
  | "image/jpg, image/jpeg, image/png"
