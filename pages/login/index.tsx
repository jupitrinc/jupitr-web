import Link from "next/link"
import { WebsiteLayout } from "layouts/WebsiteLayout"
import { ChevronLeft } from "lucide-react"
import { Card } from "ui-library/content/card/Card"
import { SignIn } from "components/user/sign-in/SignIn"
import { Button } from "ui-library/button/Button"
import PageHead from "layouts/components/PageHead"

export default function Login() {
  return (
    <>
      <PageHead
        title="Sign in - jupitr"
        description="Looking for a tech job? Join A-player teams"
        robots="index, follow"
      />
      <WebsiteLayout>
        <div className="mb-10 flex max-w-sm mx-auto">
          <Link href="/">
            <Button variant="text" icon={<ChevronLeft />} label="Home" />
          </Link>
        </div>
        <div className="max-w-sm mx-auto">
          <Card type="section">
            <SignIn />
          </Card>
        </div>
      </WebsiteLayout>
    </>
  )
}
