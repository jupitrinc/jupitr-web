import React from "react"
import { useRouter } from "next/router"
import { Edit, MapPin, Share2 } from "lucide-react"
import { Card } from "ui-library/content/card/Card"
import { Text } from "ui-library/text/Text"
import { VideoPlayer } from "ui-library/video/video-player/VideoPlayer"
import SkillCard from "ui-library/content/card/skill-card-progress-bar/SkillCard"
import { SocialIcon } from "components/talent/profile-edit/SocialLinks"
import { IUser } from "state/user/user.types"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import { urlHelper } from "helper/urlHelper"
import { Button } from "ui-library/button/Button"
import { CopyClipboard } from "ui-library/copy-clipboard/CopyClipboard"
import { useUserState } from "state/user/useUserState"
import { Divider } from "ui-library/content/divider/Divider"

export interface IProfile
  extends Omit<IUser, "email" | "account_type" | "active"> {
  talent_profile?: Omit<ITalentProfile, "user_id" | "preferences">
}

const Profile = ({ profile }: { profile: IProfile }) => {
  const router = useRouter()
  const { userName } = router.query
  const { user } = useUserState()

  const isOwnProfile = () => {
    return Boolean(userName && user.username && user.username === userName)
  }

  const socials = profile.talent_profile?.socials ?? []
  const location = profile.location?.name
  const intro_video = profile.talent_profile?.intro_video
  const skills = profile.talent_profile?.skills

  const showSocials = user.visibility?.socials?.overall ?? true
  const showLocation = user.visibility?.location?.overall ?? true
  const showIntroVideo = user.visibility?.intro_video?.overall ?? true
  const showSkills = user.visibility?.skills?.overall ?? true

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5">
      {isOwnProfile() && (
        <div>
          <div className="flex justify-end gap-2">
            <CopyClipboard
              label="Share profile"
              confirmLabel="Link copied"
              size="xs"
              icon={<Share2 className="h-4 w-4" />}
              value={urlHelper.pageUrl()}
            />

            <Button
              label="Edit profile"
              size="xs"
              variant="text"
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

          {showIntroVideo && intro_video && (
            <div className="flex max-h-96">
              <VideoPlayer src={urlHelper.videoUrl(intro_video) as string} />
            </div>
          )}

          {showSkills && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {skills?.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
              ))}
            </div>
          )}

          <Divider />

          <div className="flex flex-row justify-between gap-1">
            {showLocation && location && (
              <div className="flex flex-row items-center justify-end gap-1">
                <MapPin className="h-4 w-4 text-gray-600" />
                <Text as="span" size="xs">
                  {location}
                </Text>
              </div>
            )}

            {showSocials && (
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
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Profile
