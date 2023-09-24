import { useEffect, useState } from "react"

export const useDebounce = (delay?: number) => {
  const [value, setDebouncedValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [debouncedValue, setDebounced] = useState<string>(value)

  useEffect(() => {
    setLoading(true)

    const timer = setTimeout(() => {
      setDebounced(value)
      setLoading(false)
    }, delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay])

  return { setDebouncedValue, debouncedValue, loading }
}
