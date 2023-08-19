import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
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
