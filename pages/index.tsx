import { WebsiteLayout } from "layouts/WebsiteLayout"
import { SignIn } from "components/user/SignIn"
import { useUserState } from "state/user/useUserState"

export default function Home() {
  const { user } = useUserState()
  return <WebsiteLayout>{!user.id && <SignIn />}</WebsiteLayout>
}
