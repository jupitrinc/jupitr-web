import { X } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { ToastProps } from "./Toast.types"

export const Toast: React.FC<ToastProps> = (toast) =>
  toast.show ? (
    <div className="fixed bottom-10 right-10 z-10">
      <div
        className="flex max-w-sm flex-row items-center justify-between gap-2 rounded-lg bg-gray-50 py-4 pl-4 pr-10 shadow-md"
        role="alert"
      >
        <Text as="span" align="left">
          {toast.label}
        </Text>
        <X
          className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer text-gray-600"
          onClick={toast.onHide}
        />
      </div>
    </div>
  ) : null
