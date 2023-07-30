import React, { memo } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Github, Globe, Linkedin } from "lucide-react"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"

export const SocialLinks = memo(
  ({ socials }: { socials: ITalentProfile["socials"] }) => {
    return (
      <div className="flex flex-col gap-5">
        {socials &&
          socials.map((link, index) => (
            <div key={index} className="flex flex-row space-x-3 items-center">
              <Text as="span">
                <SocialIcon link={link} />
              </Text>

              <div className="w-full">
                <TextInput placeholder={link} defaultValue={link} />
              </div>
            </div>
          ))}
      </div>
    )
  }
)

SocialLinks.displayName = "SocialLinks"

export const SocialIcon = ({ link }) => {
  const styles = "w-5 h-5 align-middle text-gray-600"
  if (link.includes("github")) {
    return <Github className={styles} />
  } else if (link.includes("linkedin")) {
    return <Linkedin className={styles} />
  } else {
    return <Globe className={styles} />
  }
}
