import React, { useCallback } from "react"
import { Uploader } from "ui-library/uploader/Uploader"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { urlHelper } from "helper/urlHelper"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"
import { useUserState } from "state/user/useUserState"

const Logo = () => {
  const { user } = useUserState()
  const { company_profile } = useCompanyProfileState()
  const { imageUrl } = urlHelper
  const { updateLogo } = useCompanyProfileAction()

  const handleUpload = useCallback(
    async (event) => {
      if (event.target.files && company_profile.id) {
        const file = event.target.files[0]
        updateLogo(company_profile.id, file)
      }
    },
    [company_profile]
  )

  return (
    <Uploader
      onChange={handleUpload}
      accept="image/jpg, image/jpeg, image/png"
      disabled={user.permission !== "write"}
    >
      <Avatar
        size={28}
        image_url={imageUrl(company_profile.logo)}
        type="image"
      />
    </Uploader>
  )
}

export default Logo
