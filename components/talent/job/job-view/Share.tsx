import { urlHelper } from "helper/urlHelper"
import { Share2 } from "lucide-react"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"

const Share = () => {
  return (
    <CopyClipboard
      value={urlHelper.pageUrl()}
      icon={<Share2 className="h-4 w-4" />}
      label="Share job"
      confirmLabel="Link copied"
      size="xs"
    />
  )
}

export default Share
