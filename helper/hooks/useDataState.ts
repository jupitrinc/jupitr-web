import { useEffect, useState } from "react"

export const useStringState = (data: string) => {
  const [value, setValue] = useState<string>("")

  useEffect(() => {
    data && setValue(data)
  }, [data])

  return { value, setValue }
}

export const useNumberState = (data: number) => {
  const [value, setValue] = useState<number>(0)

  useEffect(() => {
    data && setValue(data)
  }, [data])

  return { value, setValue }
}

export const useArrayState = (data: string[]) => {
  const [value, setValue] = useState<string[]>([])

  useEffect(() => {
    data && setValue(data)
  }, [data])

  return { value, setValue }
}
