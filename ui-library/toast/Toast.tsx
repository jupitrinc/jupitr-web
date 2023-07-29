import { X } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"
import { ToastProps } from "./Toast.types"

export const Toast: React.FC<ToastProps> = (toast) =>
  toast.show ? (
    <div
      className="flex flex-row items-center justify-between gap-2 p-4 rounded-lg bg-gray-50 absolute bottom-10 max-w-sm m-auto left-0 right-0 shadow-md"
      role="alert"
    >
      <Text as="span" align="left">
        {toast.label}
      </Text>
      <Button
        size="xs"
        variant="text"
        icon={<X className="h-4 w-4" />}
        onClick={toast.onHide}
      />
    </div>
  ) : null
