import React from "react"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import Loading from "layouts/components/Loader"
import useAuthStateChanges from "helper/hooks/useAuthStateChanges"

export const Verify = () => {
  useAuthStateChanges()

  return (
    <WebsiteLayout>
      <Loading />
    </WebsiteLayout>
  )
}

export default Verify
