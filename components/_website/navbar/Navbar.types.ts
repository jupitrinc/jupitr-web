export interface NavBarProps {
  user: user
  signOutUser: (event: React.MouseEvent) => void
}

type user = {
  id: number
  name: string
  photo: string
}
