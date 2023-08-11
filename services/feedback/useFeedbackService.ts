import { supabaseClientComponent } from "../_supabase/client"
import { FeedbackServicePayloadType } from "./feedbackService.type"

const useFeedbackService = () => {
  const addFeedback = async (payload: FeedbackServicePayloadType) => {
    const { data, error } = await supabaseClientComponent
      .from("feedback")
      .insert(payload)
    if (error) {
      console.error("feedback error: ", error)
    }

    return { data, error }
  }

  return {
    addFeedback,
  }
}
export default useFeedbackService
