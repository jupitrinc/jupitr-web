import React, { useCallback } from "react"
import { Uploader } from "ui-library/uploader/Uploader"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { urlHelper } from "helper/urlHelper"
import { useCompanyProfileAction } from "state/company_profile/useCompanyProfileAction"

const Logo = () => {
  const { company_profile } = useCompanyProfileState()
  const { updateLogo } = useCompanyProfileAction()
  const { imageUrl } = urlHelper

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
    <Uploader onChange={handleUpload} accept="image/jpg, image/jpeg, image/png">
      <Avatar size={36} image_url={imageUrl(company_profile.logo)} />
    </Uploader>
  )
}

export default Logo
