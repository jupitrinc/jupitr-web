import { useMemo } from "react"
import { GetServerSidePropsContext } from "next"
import { TalentAppLayout } from "layouts/TalentAppLayout"
import { Loading } from "ui-library/content/loading/Loading"
import { NoMatchFound } from "ui-library/content/no-match-found/NoMatchFound"
import { talentProfileService } from "services/talent/talentProfileService"
import PageHead from "layouts/components/PageHead"
import Profile, { IProfile } from "components/talent/profile/Profile"

export default function TalentPublicProfile({
  profile,
  error,
}: {
  profile: IProfile
  error: boolean
}) {
  const title = useMemo(() => {
    return profile?.name ? `${profile.name}: jupitr` : "Profile"
  }, [profile])

  if (!profile && !error) {
    return <Loading />
  } else if (error) {
    return (
      <div className="mt-20 flex justify-center">
        <NoMatchFound message="Profile not found" link="/" label="Home" />
      </div>
    )
  } else {
    return (
      <>
        <PageHead
          title={title}
          description="Let's connect on jupitr"
          robots="index, follow"
        />
        <TalentAppLayout>
          <Profile profile={profile} />
        </TalentAppLayout>
      </>
    )
  }
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { getPublicProfile } = talentProfileService()
  const { userName } = context.query
  const { data, error } = await getPublicProfile(userName as string)

  return {
    props: {
      profile: data ?? {},
      error: error,
    },
  }
}
