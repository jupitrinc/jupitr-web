import React, { useEffect, useRef, useState } from "react"
import Message from "../chat/Message"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Button } from "ui-library/button/Button"
import { useUserState } from "state/user/useUserState"
import { useFeedbackAction } from "state/feedback/useFeedbackAction"

const Feedback = () => {
  const { user } = useUserState()

  const [message, setMessage] = useState<string>("")
  const ref = useRef<HTMLTextAreaElement>(null)

  const { addFeedback } = useFeedbackAction()

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const sendFeedback = (message: string) => {
    if (!message.trim()) return
    addFeedback({ user_id: user.id, rating: 0, message: message })

    //console.log("send...")
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-5 bg-gray-100 rounded-lg">
        <Message>
          how can we make <span className="font-medium">jupitr</span> better?
        </Message>
      </div>

      <div className="flex flex-col gap-5">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="feedback"
          maxLength={250}
          ref={ref}
          autoFocus={true}
        />
        <Button
          label="Send"
          onClick={() => sendFeedback(message)}
          variant="outlined"
        />
      </div>
    </div>
  )
}

export default Feedback
