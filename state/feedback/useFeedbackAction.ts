import useFeedbackService from "services/feedback/useFeedbackService"
import { IFeedback } from "./feedback.types"

export function useFeedbackAction() {
  const { addFeedback: addFeedbackService } = useFeedbackService()

  const addFeedback = async (feedback: IFeedback) => {
    if (!feedback.user_id || !feedback.message || !feedback.rating) return

    const { data, error } = await addFeedbackService(feedback)

    console.log(feedback)

    if (data) {
      console.log("feedback submitted")
    }

    console.log(error)
  }

  return {
    addFeedback,
  }
}
