import React from "react"
import { useRouter } from "next/router"
import { dateHelper } from "helper/dateHelper"

export const Footer = () => {
  const router = useRouter()
  const { currentYear } = dateHelper

  if (router.pathname === "/" || router.pathname.includes("/legal/")) {
    return (
      <footer className="mt-20">
        <p className="text-gray-500 sm:text-center text-xs mb-10">
          © {currentYear()} jupitr
        </p>
      </footer>
    )
  } else {
    return null
  }
}
