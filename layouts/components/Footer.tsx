import React from "react"
import { useRouter } from "next/router"
import { dateHelper } from "helper/dateHelper"
import { Text } from "ui-library/text/Text"

export const Footer = () => {
  const router = useRouter()
  const { currentYear } = dateHelper

  if (router.pathname === "/") {
    return (
      <footer className="mt-20 flex flex-row gap-3 items-center">
        <Text as="span" size="sm">
          © {currentYear()} jupitr
        </Text>
        <a
          href="https://medium.com/@jupitr/terms-of-use-68e069bc19f5"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Text as="span" size="sm">
            Terms
          </Text>
        </a>
        <a
          href="https://medium.com/@jupitr/privacy-policy-903f8d1fe156"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Text as="span" size="sm">
            Privacy
          </Text>
        </a>
      </footer>
    )
  } else {
    return null
  }
}
