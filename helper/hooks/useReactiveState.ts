import { useEffect, useState } from "react"

export const useReactiveState = <T>(initialState: T, data: T) => {
  const [value, setValue] = useState<T>(initialState)

  useEffect(() => {
    data && setValue(data)
  }, [data])

  return { value, setValue }
}
