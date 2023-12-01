import { X } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { NotificationProps } from "./Notification.types"

export const Notification: React.FC<NotificationProps> = (notification) => (
  <div className="relative">
    <div
      className="flex max-w-sm flex-row items-center justify-between gap-2 rounded-lg bg-gray-50 py-4 pl-4 pr-10 shadow-md"
      role="alert"
    >
      <Text as="span" align="left">
        {notification.message}
      </Text>
      <X
        className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-600"
        onClick={notification.onHide}
      />
    </div>
  </div>
)
