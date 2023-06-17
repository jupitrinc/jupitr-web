import { ProfileLayout } from "layouts/ProfileLayout"
import { Filters } from "components/talent/profile/Filters"
import { Intro } from "components/talent/profile/Intro"
import { Links } from "components/talent/profile/Links"
import { Skills } from "components/talent/profile/Skills"

export default function Profile() {
  // network calls
  // pass data to each component
  // memoize components

  return (
    <ProfileLayout>
      <Intro />
      <Skills />
      <Links />
      <Filters />
    </ProfileLayout>
  )
}
