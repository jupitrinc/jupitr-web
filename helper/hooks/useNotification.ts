import { useEffect, useState } from "react"

export const useNotification = (toggle?: boolean) => {
  const [notification, setNotification] = useState<boolean>(false)

  useEffect(() => {
    if (toggle) {
      showNotification()
    }
  }, [toggle])

  const showNotification: () => void = () => setNotification(true)
  const hideNotification: () => void = () => setNotification(false)

  return { notification, showNotification, hideNotification }
}
