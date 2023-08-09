import { useEffect, useRef } from "react"

export const useTimeout = () => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    return clearRef
  }, [])

  const setRef = (ref: NodeJS.Timeout | undefined) => {
    timeoutRef.current = ref
  }

  const clearRef = () => clearTimeout(timeoutRef.current)

  return { setRef, clearRef }
}
