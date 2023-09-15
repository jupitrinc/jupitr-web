import { useEffect, useRef, useState } from "react"

interface returning {
  counter: number
  start: () => void
  pause: () => void
  reset: () => void
}

export const useCountDown: (total: number, ms?: number) => returning = (
  total: number,
  ms: number = 1000
) => {
  const [counter, setCountDown] = useState(total)
  const [startCountDown, setStartCountDown] = useState(false)

  const intervalId = useRef<number>()
  const start: () => void = () => setStartCountDown(true)
  const pause: () => void = () => setStartCountDown(false)
  const reset: () => void = () => {
    clearInterval(intervalId.current)
    setStartCountDown(false)
    setCountDown(total)
  }

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      startCountDown && counter > 0 && setCountDown((counter) => counter - 1)
    }, ms)

    if (counter === 0) clearInterval(intervalId.current)

    return () => clearInterval(intervalId.current)
  }, [startCountDown, counter, ms])

  return { counter, start, pause, reset }
}
