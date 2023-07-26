import { useState } from "react"

export const useNotification = () => {
  const [notification, setNotification] = useState<boolean>(false)

  const showNotification: () => void = () => setNotification(true)
  const hideNotification: () => void = () => setNotification(false)

  return { notification, showNotification, hideNotification }
}
