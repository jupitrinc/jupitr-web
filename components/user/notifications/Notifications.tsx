import { Notification } from "ui-library/notification/Notification"
import { useNotificationState } from "state/notification/useNotificationState"
import { useNotificationAction } from "state/notification/useNotificationAction"

const Notifications = () => {
  const { notifications } = useNotificationState()
  const { hideNotification } = useNotificationAction()

  return notifications.length > 0 ? (
    <div className="fixed bottom-5 right-5 z-10 flex flex-col gap-3">
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          onHide={() => hideNotification(notification.id)}
          message={notification.message}
        />
      ))}
    </div>
  ) : null
}

export default Notifications
