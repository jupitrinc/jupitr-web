import React from "react"
import { useRouter } from "next/router"
import { dateHelper } from "helper/dateHelper"
import { Text } from "ui-library/text/Text"

export const Footer = () => {
  const router = useRouter()
  const { currentYear } = dateHelper

  if (router.pathname === "/") {
    return (
      <footer className="mt-32 max-w-sm mx-auto flex flex-col gap-5 ">
        <div className="flex flex-row gap-3 items-center justify-center">
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

          <a
            href="https://medium.com/@jupitr/contact-c1b711fe2794"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Text as="span" size="sm">
              Contact
            </Text>
          </a>
        </div>
      </footer>
    )
  } else {
    return null
  }
}
