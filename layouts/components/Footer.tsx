import React from "react"
import { Text } from "ui-library/text/Text"
import { dateHelper } from "helper/dateHelper"

export const Footer = () => {
  const { currentYear } = dateHelper

  return (
    <footer className="mt-10 max-w-sm mx-auto flex flex-row gap-3 items-center text-center justify-center">
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
    </footer>
  )
}
