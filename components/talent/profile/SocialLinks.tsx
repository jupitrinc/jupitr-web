import React, { useCallback } from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Github, Globe, Linkedin } from "lucide-react"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useUserState } from "state/user/useUserState"
import SectionVisibility from "./SectionVisibility"

enum SocialsEnum {
  linkedin = "linkedin",
  github = "github",
  website = "website",
}

const SocialLinks = () => {
  const { user } = useUserState()
  const { updateSocials } = useTalentProfileAction()

  const { value: socials, setValue: setSocials } = useReactiveState(
    [],
    user.socials
  )

  const onChange = useCallback(
    (e: { target: { value: string } }, name: string) => {
      const copySocials = [...(socials ?? [])]
      const targetValue = e.target.value.trim()

      if (socials?.find((s) => s.name === name)) {
        copySocials.map((s) => s.name === name && (s.url = targetValue))
      } else {
        copySocials.push({ name: name, url: targetValue })
      }

      setSocials(copySocials)
    },
    [socials]
  )

  const socialUrl = (name: string) => {
    return socials?.find((s) => s.name === name)?.url
  }

  const save = () => {
    updateSocials(user.id, socials)
  }

  return (
    <>
      <div className="mb-2 flex items-center justify-between">
        <Text as="h2" size="sm">
          Social links
        </Text>
        <SectionVisibility section="socials" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center space-x-3">
          <Text as="span">
            <SocialIcon name={SocialsEnum.github} />
          </Text>

          <div className="w-full">
            <TextInput
              placeholder="GitHub profile"
              value={
                socialUrl(SocialsEnum.github)
                  ? socialUrl(SocialsEnum.github)
                  : ""
              }
              onChange={(e) => onChange(e, SocialsEnum.github)}
              onBlur={save}
            />
          </div>
        </div>

        <div className="flex flex-row items-center space-x-3">
          <Text as="span">
            <SocialIcon name={SocialsEnum.linkedin} />
          </Text>

          <div className="w-full">
            <TextInput
              placeholder="LinkedIn profile"
              value={
                socialUrl(SocialsEnum.linkedin)
                  ? socialUrl(SocialsEnum.linkedin)
                  : ""
              }
              onChange={(e) => onChange(e, SocialsEnum.linkedin)}
              onBlur={save}
            />
          </div>
        </div>

        <div className="flex flex-row items-center space-x-3">
          <Text as="span">
            <SocialIcon name={SocialsEnum.website} />
          </Text>

          <div className="w-full">
            <TextInput
              placeholder="Website"
              value={
                socialUrl(SocialsEnum.website)
                  ? socialUrl(SocialsEnum.website)
                  : ""
              }
              onChange={(e) => onChange(e, SocialsEnum.website)}
              onBlur={save}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SocialLinks

export const SocialIcon = ({ name }) => {
  if (typeof name !== "string") return null

  const styles = "w-5 h-5 align-middle text-gray-600"
  if (name.includes("github")) {
    return <Github className={styles} />
  } else if (name.includes("linkedin")) {
    return <Linkedin className={styles} />
  } else {
    return <Globe className={styles} />
  }
}
