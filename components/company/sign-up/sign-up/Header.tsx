import { Text } from "ui-library/text/Text"

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <Text as="h1" size="xl2">
        Sign up
      </Text>
      <Text as="p">Add your company profile</Text>
    </div>
  )
}

export default Header
