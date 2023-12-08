import React, { useMemo } from "react"
import { useRouter } from "next/router"
import { Edit, Share2 } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"
import { useUserState } from "state/user/useUserState"
import { urlHelper } from "helper/urlHelper"

const Actions = () => {
  const router = useRouter()
  const { userName } = router.query
  const { user } = useUserState()

  const isOwnProfile = () => {
    return Boolean(userName && user.username && user.username === userName)
  }

  const shareProfileValue = useMemo(
    () =>
      urlHelper.pageUrl() ?? `${urlHelper.staticDomain()}/profile/${userName}`,
    [userName]
  )

  return (
    <div className="float-right flex flex-row justify-end gap-2 rounded-lg bg-gray-100 text-end">
      {isOwnProfile() && (
        <Button
          label="Edit"
          size="xs"
          icon={<Edit className="h-3 w-3" />}
          onClick={() => router.push("/profile")}
        />
      )}
      <CopyClipboard
        label="Share"
        confirmLabel="Profile link copied"
        size="xs"
        variant="contained"
        icon={<Share2 className="h-3 w-3" />}
        value={shareProfileValue}
      />
    </div>
  )
}

export default Actions
