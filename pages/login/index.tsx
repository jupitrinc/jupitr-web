import { SignIn } from "components/user/SignIn"
import { DefaultLayout } from "layouts/DefaultLayout"
import { LoginLayout } from "layouts/LoginLayout"

export default function Login() {
  return (
    <LoginLayout>
      <SignIn />
    </LoginLayout>
  )
}
