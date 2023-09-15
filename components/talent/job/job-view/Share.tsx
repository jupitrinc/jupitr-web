import { urlHelper } from "helper/urlHelper"
import { Share2 } from "lucide-react"
import { useRouter } from "next/router"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"

const Share = () => {
  const router = useRouter()
  const { jobId } = router.query

  if (jobId)
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
