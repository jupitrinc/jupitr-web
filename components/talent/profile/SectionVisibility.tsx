import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"
import { useUserState } from "state/user/useUserState"
import { useTalentProfileAction } from "state/talent_profile/useTalentProfileAction"
import { useTimeout } from "helper/hooks/useTimeout"
import { ProfileSections } from "services/_supabase/database"

interface ISectionVisibilityProps {
  section: ProfileSections
}

const SectionVisibility = ({ section }: ISectionVisibilityProps) => {
  const [showPopup, setShowPopup] = useState(false)
  const { updateVisibility } = useTalentProfileAction()
  const { setRef, clearRef } = useTimeout()
  const { user } = useUserState()

  const handleVisibilityChange = () => {
    const { visibility } = user
    const updatedVisibility = visibility ?? {}
    updatedVisibility[section] = {
      overall: !user.visibility?.[section]?.overall,
    }
    updateVisibility(user.id, updatedVisibility)

    setShowPopup(true)
    clearRef()
    setRef(
      setTimeout(() => {
        setShowPopup(false)
      }, 2000)
    )
  }

  const isVisible = user.visibility?.[section]?.overall ?? true

  return (
    <div className="flex items-center">
      <Text
        className={`mr-2 transform transition-opacity duration-300 ease-in-out ${
          showPopup ? "opacity-100" : "opacity-0"
        }`}
        as="span"
        size="xs"
      >
        {isVisible ? "Visible" : "Hidden"}
      </Text>

      <Button
        icon={
          isVisible ? (
            <Eye className="h-5 w-5" />
          ) : (
            <EyeOff className="h-5 w-5" />
          )
        }
        variant="text"
        onClick={handleVisibilityChange}
      />
    </div>
  )
}

export default SectionVisibility
