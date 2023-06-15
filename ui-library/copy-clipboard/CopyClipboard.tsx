import { Check, Copy } from "lucide-react"
import { useState } from "react"
import { copyClipboardStyles } from "./CopyClipboard.styles"

const CopyClipboard = ({ email }) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 1000)
  }

  const styles = copyClipboardStyles

  return (
    <div className={styles.container}>
      <div className={styles.text}>{email}</div>
      <button
        className="px-2 py-2 rounded text-gray-500 hover:text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 bg-gray-50 hover:bg-gray-100 active:bg-gray-200 disabled:cursor-not-allowed disabled:text-opacity-50 disabled:hover:text-opacity-50 disabled:hover:text-gray-500 disabled:hover:bg-gray-50 disabled:active:bg-gray-50"
        onClick={copyToClipboard}
      >
        {isCopied ? <Check /> : <Copy />}
      </button>
    </div>
  )
}

export default CopyClipboard
