import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { Button } from "ui-library/button/Button"
import { CopyClipboardProps } from "./CopyClipboard.types"

export const CopyClipboard: React.FC<CopyClipboardProps> = (clipboard) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(clipboard.value)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  return (
    <Button
      onClick={copyToClipboard}
      variant="contained"
      size="base"
      icon={isCopied ? <Check /> : <Copy />}
      disabled={!clipboard.value}
    />
  )
}
