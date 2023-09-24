import { supabaseClientComponent } from "../_supabase/client"
import { FeedbackServicePayloadType } from "./feedbackService.type"

const FEEDBACK_TABLE = "feedback"

const feedbackService = () => {
  const addFeedback = async (payload: FeedbackServicePayloadType) => {
    const { data, error } = await supabaseClientComponent
      .from(FEEDBACK_TABLE)
      .insert(payload)
    if (error) {
      console.error("feedbackService -> addFeedback:", error.message)
    }

    return { data, error }
  }

  return {
    addFeedback,
  }
}
export default feedbackService
