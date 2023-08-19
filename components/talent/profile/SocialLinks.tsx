import React from "react"
import { TextInput } from "ui-library/form/text-input/TextInput"
import { Text } from "ui-library/text/Text"
import { Github, Globe, Linkedin } from "lucide-react"
import { useReactiveState } from "helper/hooks/useReactiveState"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useUserState } from "state/user/useUserState"

const SocialLinks = () => {
  const { user } = useUserState()
  const { updateSocials } = useTalentProfileAction()

  const { value: socials, setValue: setSocials } = useReactiveState(
    [],
    user.socials
  )

  const onChange = (e: { target: { value: string } }, index: number) => {
    const updateSocials = [...socials]
    updateSocials[index] = e.target.value
    setSocials(updateSocials)
  }

  const save = () => {
    updateSocials(user.id, socials)
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row space-x-3 items-center">
        <Text as="span">
          <SocialIcon link={"github"} />
        </Text>

        <div className="w-full">
          <TextInput
            placeholder="GitHub profile"
            value={socials[0] ? socials[0] : ""}
            onChange={(e) => onChange(e, 0)}
            onBlur={save}
          />
        </div>
      </div>

      <div className="flex flex-row space-x-3 items-center">
        <Text as="span">
          <SocialIcon link={"linkedin"} />
        </Text>

        <div className="w-full">
          <TextInput
            placeholder="LinkedIn profile"
            value={socials[1] ? socials[1] : ""}
            onChange={(e) => onChange(e, 1)}
            onBlur={save}
          />
        </div>
      </div>

      <div className="flex flex-row space-x-3 items-center">
        <Text as="span">
          <SocialIcon link={"portfolio"} />
        </Text>

        <div className="w-full">
          <TextInput
            placeholder="Website"
            value={socials[2] ? socials[2] : ""}
            onChange={(e) => onChange(e, 2)}
            onBlur={save}
          />
        </div>
      </div>
    </div>
  )
}

export default SocialLinks

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
