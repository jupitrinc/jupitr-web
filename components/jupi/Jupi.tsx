import React from "react"
import { useNotification } from "helper/hooks/useNotification"
import { Sticker } from "lucide-react"
import { useUserState } from "state/user/useUserState"
import { Modal } from "ui-library/modal/Modal"
import Greetings from "./chat/Greetings"
import Message from "./chat/Message"
import Feedback from "./feedback/Feedback"
import { themeStyles } from "ui-library/_theme/Theme.styles"

const Jupi = () => {
  const { user } = useUserState()
  const { notification, showNotification, hideNotification } = useNotification()
  return (
    <>
      <Sticker
        onClick={showNotification}
        className={`h-6 w-6 text-gray-600 hover:text-orange-500 ${themeStyles.animation.scale}`}
      />
      <Modal open={notification} onClose={hideNotification}>
        <div className="flex flex-row gap-5">
          <Sticker className="w-10 h-10 text-gray-500" />

          <div className="flex flex-col gap-5">
            <Message>
              <Greetings name={user.name} />
            </Message>

            <Feedback />
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Jupi
