import React from "react"
import { Uploader } from "ui-library/uploader/Uploader"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { useCompanyProfileState } from "state/company_profile/useCompanyProfileState"
import { urlHelper } from "helper/urlHelper"

const Logo = () => {
  const { company_profile } = useCompanyProfileState()
  const { avatarUrl } = urlHelper

  const handleUpload = async (event) => {
    /* if (event.target.files) {
      const file = event.target.files[0]
      const fileExt = file.name.split(".").pop()
      const fileName = `avatar.${fileExt}`
      const filePath = `${user.id}/${fileName}`
      const resizedFile = await imageHelper.resize(file)
      //updateAvatar(resizedFile, filePath, user.id)
    } */
  }

  return (
    <Uploader onChange={handleUpload} accept="image/jpg, image/jpeg, image/png">
      <Avatar size={36} image_url={avatarUrl(company_profile.logo)} />
    </Uploader>
  )
}

export default Logo
