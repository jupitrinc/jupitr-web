import React from "react"
import { useRouter } from "next/router"
import { Edit, MapPin } from "lucide-react"
import { Card } from "ui-library/content/card/Card"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"
import { SocialIcon } from "components/talent/profile/SocialLinks"
import { IUser } from "state/user/user.types"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { urlHelper } from "helper/urlHelper"
import { Button } from "ui-library/button/Button"
import { useUserState } from "state/user/useUserState"
import { Divider } from "ui-library/content/divider/Divider"

export interface IPublicProfile
  extends Omit<IUser, "email" | "account_type" | "active"> {
  talent_profile?: Omit<ITalentProfile, "user_id" | "preferences">
}

const PublicProfile = ({ profile }: { profile: IPublicProfile }) => {
  const router = useRouter()
  const { userName } = router.query
  const { user } = useUserState()

  const showEditProfile = () => {
    return Boolean(userName && user.username && user.username === userName)
  }

  const socials = profile.talent_profile?.socials ?? []
  const location = profile.location?.name
  const intro_video = profile.talent_profile?.intro_video
  const skills = profile.talent_profile?.skills

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5">
      {showEditProfile() && (
        <div>
          <div className="flex justify-end">
            <Button
              label="Edit profile"
              size="xs"
              variant="outlined"
              icon={<Edit className="h-4 w-4" />}
              onClick={() => router.push("/profile")}
            />
          </div>
        </div>
      )}

      <Card type="section">
        <div className="flex flex-col gap-5">
          <div className="w-full text-center">
            <Text as="span" size="xl">
              {profile.name}
            </Text>
          </div>

          {intro_video && (
            <div className="flex max-h-96">
              <VideoPlayer src={urlHelper.videoUrl(intro_video) as string} />
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {skills?.map((skill) => <SkillCard key={skill.id} skill={skill} />)}
          </div>

          <Divider />

          <div className="flex flex-row justify-between gap-1">
            {location && (
              <div className="flex flex-row items-center justify-end gap-1">
                <MapPin className="h-4 w-4 text-gray-600" />
                <Text as="span" size="xs">
                  {location}
                </Text>
              </div>
            )}

            <div className="flex flex-row justify-end gap-3">
              {socials.map(
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
          </div>
        </div>
      </Card>
    </div>
  )
}

export default PublicProfile
