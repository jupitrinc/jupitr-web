import Link from "next/link"
import { useRouter } from "next/router"
import brand from "public/logo.png"
import { NavBarProps } from "./Navbar.types"
import { Image } from "ui-library/image/Image"
import { Button } from "ui-library/button/Button"
import { Dropdown } from "ui-library/menu/dropdown/Dropdown"

export const NavBar: React.FC<NavBarProps> = (nav) => {
  const router = useRouter()

  const options = [
    { label: "Goals", onClick: () => router.push("/goals") },
    { label: "Profile", onClick: () => router.push("/profile") },
    { label: "Sign out", onClick: nav.signOutUser },
  ]
  return (
    <nav>
      <div className="relative flex h-16 items-center justify-between">
        <div className="flex flex-1 sm:items-stretch sm:justify-start">
          <Link href="/" className="flex flex-shrink-0 items-center">
            <Image src={brand} alt="logo" className="h-8 w-auto" />
            <span className="pl-1 tracking-wider font-['Roboto'] font-bold">
              Spikes
            </span>
          </Link>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          {nav.user.id ? (
            <Dropdown
              label={nav.user.name}
              imgSrc={nav.user.photo}
              options={options}
              type={nav.user.photo ? "avatar" : "placeholder"}
            />
          ) : (
            <Button label="Sign in" onClick={() => router.push("/login")} />
          )}
        </div>
      </div>
    </nav>
  )
}
