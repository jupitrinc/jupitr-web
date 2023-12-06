import React from "react"
import { Github, Globe, Linkedin } from "lucide-react"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { urlHelper } from "helper/urlHelper"

interface props {
  socials: ITalentProfile["socials"] | undefined
}

const Socials = ({ socials }: props) => {
  const items = socials ?? []

  return (
    <div className="flex flex-row justify-end gap-3">
      {items.map(
        (social) =>
          social.url && (
            <a
              key={social.url}
              href={urlHelper.websiteUrl(social.url)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialIcon name={social.name} />
            </a>
          )
      )}
    </div>
  )
}

export default Socials

const SocialIcon = ({ name }) => {
  if (typeof name !== "string") return null

  const styles = "w-5 h-5 align-middle text-gray-500"
  if (name.includes("github")) {
    return <Github className={styles} />
  } else if (name.includes("linkedin")) {
    return <Linkedin className={styles} />
  } else {
    return <Globe className={styles} />
  }
}
