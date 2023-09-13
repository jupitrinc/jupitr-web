import { useEffect, useState } from "react"

export const useModal = (toggle?: boolean) => {
  const [modal, setModal] = useState<boolean>(false)

  useEffect(() => {
    if (toggle) {
      showModal()
    }
  }, [toggle])

  const showModal: () => void = () => setModal(true)
  const hideModal: () => void = () => setModal(false)

  return { modal, showModal, hideModal }
}
