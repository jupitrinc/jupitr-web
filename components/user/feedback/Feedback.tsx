import React, { useCallback, useState } from "react"
import { Sticker } from "lucide-react"
import { Modal } from "ui-library/modal/Modal"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { useNotification } from "helper/hooks/useNotification"
import { useUserState } from "state/user/useUserState"
import { useFeedbackAction } from "state/feedback/useFeedbackAction"
import SentMessage from "./SentMessage"

const Feedback = () => {
  const { user } = useUserState()
  const { notification, showNotification, hideNotification } = useNotification()
  const { addFeedback } = useFeedbackAction()

  const [message, setMessage] = useState<string>("")
  const [sent, setSent] = useState<boolean>(false)

  const sendFeedback = useCallback(
    (message: string) => {
      if (!message.trim()) return

      addFeedback({ user_id: user.id, rating: 0, message: message })
      setSent(true)
      setMessage("")
    },
    [message, user.id]
  )

  return (
    <>
      <Button onClick={showNotification} label="Give feedback" size="xs" />
      <Modal open={notification} onClose={hideNotification}>
        <div className="flex flex-row gap-5">
          <Sticker className="w-10 h-10 text-gray-500" />

          {sent ? (
            <SentMessage />
          ) : (
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <Text as="span" size="base">
                  hi{" "}
                  <span className="font-medium">{`${
                    user.name ? user.name : "there"
                  }`}</span>
                  <span role="img" aria-label="waving hand">
                    {" "}
                    👋
                  </span>
                </Text>

                <Text as="span" size="base">
                  how can we make <span className="font-medium">jupitr</span>{" "}
                  better?
                </Text>
              </div>

              <Textarea
                value={message}
                placeholder="feedback ..."
                onChange={(e) => setMessage(e.target.value)}
                name="feedback"
                maxLength={250}
                autoFocus={true}
              />
              <Button
                label="Send"
                onClick={() => sendFeedback(message)}
                variant="outlined"
              />
            </div>
          )}
        </div>
      </Modal>
    </>
  )
}

export default Feedback
