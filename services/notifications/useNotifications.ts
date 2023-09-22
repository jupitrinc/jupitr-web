import { supabaseClientComponent } from "../_supabase/client"
import { Database } from "../_supabase/database"

const notificationService = () => {
  const getNotifications = async (user_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from("notifications")
      .select()
      .eq("user_id", user_id)

    if (error) {
      console.error("notificationService -> getNotifications:", error.message)
    }
    return { data, error }
  }

  const updateNotification = async (
    id: string,
    payload: Database["public"]["Tables"]["notifications"]["Update"]
  ) => {
    const { data, error } = await supabaseClientComponent
      .from("users")
      .update({ ...payload, updated_at: new Date().toISOString() })
      .eq("id", id)
      .select()
      .single()

    if (error) {
      console.error(
        "notificationService -> updateNotifications:",
        error.message
      )
    }

    return { data, error }
  }
  const addNotification = async (
    id: string,
    payload: {
      alert: Database["public"]["Enums"]["alert_type"]
      interval: Database["public"]["Enums"]["interval_type"]
      active: boolean
      type: string[]
      user_id: string
    }
  ) => {
    const { data, error } = await supabaseClientComponent
      .from("users")
      .insert(payload)
      .select()
      .single()

    if (error) {
      console.error("notificationService -> addNotification:", error.message)
    }

    return { data, error }
  }
  return {
    getNotifications,
    addNotification,
    updateNotification,
  }
}

export default notificationService
