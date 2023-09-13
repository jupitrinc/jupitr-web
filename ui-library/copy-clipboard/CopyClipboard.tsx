import { Check, Copy } from "lucide-react"
import { useCallback, useMemo, useState } from "react"
import { Button } from "ui-library/button/Button"
import { CopyClipboardProps } from "./CopyClipboard.types"

export const CopyClipboard: React.FC<CopyClipboardProps> = (clipboard) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(clipboard.value)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }, [clipboard.value])

  const label = useMemo(() => {
    return isCopied && clipboard.confirmLabel
      ? clipboard.confirmLabel
      : clipboard.label
  }, [clipboard, isCopied])

  return (
    <Button
      onClick={copyToClipboard}
      label={label}
      variant={clipboard.variant ? clipboard.variant : "text"}
      size={clipboard.size ? clipboard.size : "sm"}
      color={clipboard.color}
      icon={
        isCopied ? (
          <Check className="h-4 w-4 text-gray-600" />
        ) : clipboard.icon ? (
          clipboard.icon
        ) : (
          <Copy className="h-4 w-4 text-gray-600" />
        )
      }
      disabled={!clipboard.value || clipboard.disabled}
      loading={clipboard.loading}
    />
  )
}
