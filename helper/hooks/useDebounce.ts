import { useEffect, useState } from "react"

export const useDebounce = (delay?: number) => {
  const [value, setDebouncedValue] = useState<string>("")
  const [debouncedValue, setDebounced] = useState<string>(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return { setDebouncedValue, debouncedValue }
}
