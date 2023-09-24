import feedbackService from "services/feedback/feedbackService"
import { IFeedback } from "./feedback.types"

export function useFeedbackAction() {
  const { addFeedback: addFeedbackService } = feedbackService()

  const addFeedback = async (feedback: IFeedback) => {
    if (!feedback.user_id || !feedback.message || !String(feedback.rating))
      return

    const { data, error } = await addFeedbackService(feedback)

    if (error) {
      return false
    } else {
      return true
    }
  }

  return {
    addFeedback,
  }
}
