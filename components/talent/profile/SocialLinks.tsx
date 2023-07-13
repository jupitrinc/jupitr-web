import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Github, Globe, Linkedin } from "lucide-react"
import { useTalentProfileState } from "state/talent_profile/useTalentProfileState"

export const SocialLinks = () => {
  const { talent_profile } = useTalentProfileState()
  const links = talent_profile.social_links
  return (
    <div className="flex flex-col gap-5">
      {links.map((link, index) => (
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

SocialLinks.displayName = "SocialLinks"

const SocialIcon = ({ link }) => {
  const styles = "w-5 h-5 align-middle"
  if (link.includes("github")) {
    return <Github className={styles} />
  } else if (link.includes("linkedin")) {
    return <Linkedin className={styles} />
  } else {
    return <Globe className={styles} />
  }
}
