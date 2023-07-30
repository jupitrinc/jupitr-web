import { useEffect, useState } from "react"

export const useDataState = (data: string) => {
  const [value, setValue] = useState<string>("")

  useEffect(() => {
    data && setValue(data)
  }, [data])

  return { value, setValue }
}
