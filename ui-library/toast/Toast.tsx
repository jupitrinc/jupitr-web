import { X } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { ToastProps } from "./Toast.types"

export const Toast: React.FC<ToastProps> = (toast) =>
  toast.show ? (
    <div className="fixed right-10 bottom-10 z-10">
      <div
        className="flex flex-row items-center justify-between gap-2 py-4 pl-4 pr-10 rounded-lg bg-gray-50 max-w-sm shadow-md"
        role="alert"
      >
        <Text as="span" align="left">
          {toast.label}
        </Text>
        <X
          className="h-5 w-5 text-gray-600 cursor-pointer absolute top-1/2 -translate-y-1/2 right-3"
          onClick={toast.onHide}
        />
      </div>
    </div>
  ) : null
