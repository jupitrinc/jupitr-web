import React, { useEffect, useRef, useState } from "react"
import Message from "../chat/Message"
import { Textarea } from "ui-library/form/textarea/Textarea"
import { Button } from "ui-library/button/Button"

const Feedback = () => {
  const [feedback, setFeedback] = useState<string>("")
  const ref = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  const sendFeedback = () => {
    if (!feedback.trim()) return
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
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          name="feedback"
          maxLength={250}
          ref={ref}
          autoFocus={true}
        />
        <Button label="Send" onClick={sendFeedback} variant="outlined" />
      </div>
    </div>
  )
}

export default Feedback
