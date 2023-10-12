import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "ui-library/button/Button"

const Navbar = () => {
  return (
    <div className="mb-10 flex justify-between">
      <Link href="/">
        <Button variant="text" icon={<ChevronLeft />} label="Home" />
      </Link>

      <Link href="/login">
        <Button label="Sign in" />
      </Link>
    </div>
  )
}

export default Navbar
