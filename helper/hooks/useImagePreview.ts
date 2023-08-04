import { useEffect, useState } from "react"

export const useImagePreview = (imageFile: File | string) => {
  const [preview, setPreview] = useState<string>("")

  useEffect(() => {
    let fileReader,
      isCancel = false
    if (imageFile) {
      fileReader = new FileReader()
      fileReader.onload = (e) => {
        const { result } = e.target
        if (result && !isCancel) {
          setPreview(result)
        }
      }
      fileReader.readAsDataURL(imageFile)
    }
    return () => {
      isCancel = true
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort()
      }
    }
  }, [imageFile])

  return { preview }
}
