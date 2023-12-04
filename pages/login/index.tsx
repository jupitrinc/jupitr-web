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
        description=""
        robots="index, follow"
      />
      <WebsiteLayout>
        <div className="mx-auto mb-10 flex max-w-sm">
          <Link href="/">
            <Button
              variant="text"
              icon={<ChevronLeft className="h-5 w-5" />}
              label="Home"
              size="xs"
            />
          </Link>
        </div>
        <div className="mx-auto max-w-sm">
          <Card type="section">
            <SignIn />
          </Card>
        </div>
      </WebsiteLayout>
    </>
  )
}
