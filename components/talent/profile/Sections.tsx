import React from "react"
import { Card } from "ui-library/content/card/Card"
import { IUser } from "state/user/user.types"
import { Divider } from "ui-library/content/divider/Divider"
import { ITalentProfile } from "state/talent_profile/talentProfile.types"
import Actions from "./Actions"
import Socials from "./Socials"
import Location from "./Location"
import Skills from "./Skills"
import IntroVideo from "./IntroVideo"
import Footer from "./Footer"
import Title from "./Title"
import Projects from "./Projects"

export interface IProfile
  extends Omit<IUser, "email" | "account_type" | "active"> {
  talent_profile?: Omit<ITalentProfile, "user_id" | "preferences">
}

const Sections = ({ profile }: { profile: IProfile }) => {
  const socials = profile.talent_profile?.socials
  const showSocials =
    profile.talent_profile?.visibility?.socials?.overall ?? true

  const location = profile.location?.name
  const showLocation =
    profile.talent_profile?.visibility?.location?.overall ?? true

  const intro_video = profile.talent_profile?.intro_video
  const showIntroVideo =
    profile.talent_profile?.visibility?.intro_video?.overall ?? true

  const skills = profile.talent_profile?.skills
  const showSkills = profile.talent_profile?.visibility?.skills?.overall ?? true

  const projects = profile.talent_profile?.projects
  const showProjects =
    profile.talent_profile?.visibility?.projects?.overall ?? true

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <Actions />

      <div className="flex flex-col gap-5">
        <Title name={profile.name} tagline={profile.talent_profile?.tagline} />

        <Card type="section">
          <div className="flex flex-col gap-5">
            {showIntroVideo && <IntroVideo intro_video={intro_video} />}

            {showSkills && <Skills skills={skills} />}

            <Divider />

            <div className="flex flex-row items-center justify-between">
              {showLocation && <Location location={location} />}
              {showSocials && <Socials socials={socials} />}
            </div>
          </div>
        </Card>

        {showProjects && <Projects projects={projects} />}
      </div>

      <Footer />
    </div>
  )
}

export default Sections
