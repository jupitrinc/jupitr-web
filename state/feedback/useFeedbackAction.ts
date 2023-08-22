import useFeedbackService from "services/feedback/useFeedbackService"
import { IFeedback } from "./feedback.types"

export function useFeedbackAction() {
  const { addFeedback: addFeedbackService } = useFeedbackService()

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
