import { supabaseClientComponent } from "../_supabase/client"

const NOTIFICATIONS_COMPANY_MEMBERS_TABLE = "notifications_company_members"

interface UpdateNotificationPayload {
  id: string
  active: boolean
}

const notificationService = () => {
  const getNotifications = async (user_id: string) => {
    const { data, error } = await supabaseClientComponent
      .from(NOTIFICATIONS_COMPANY_MEMBERS_TABLE)
      .select()
      .eq("user_id", user_id)

    if (error) {
      console.error("notificationService -> getNotifications:", error.message)
    }
    return { data, error }
  }

  const updateNotification = async (payload: UpdateNotificationPayload) => {
    const { data, error } = await supabaseClientComponent
      .from(NOTIFICATIONS_COMPANY_MEMBERS_TABLE)
      .update({ active: payload.active, updated_at: new Date().toISOString() })
      .eq("id", payload.id)
      .select()
      .single()

    if (error) {
      console.error("notificationService -> updateNotification:", error.message)
    }

    return { data, error }
  }

  return {
    getNotifications,
    updateNotification,
  }
}

export default notificationService
