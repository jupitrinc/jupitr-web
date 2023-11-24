import { useRouter } from "next/router"
import { Button } from "ui-library/button/Button"
import { Text } from "ui-library/text/Text"

const GetStarted = () => {
  const router = useRouter()

  const postAJob = () => {
    router.push("/c/signup")
  }

  const goHome = () => {
    router.push("/")
  }

  return (
    <div className="sticky top-5 w-full bg-gray-200/90 backdrop-blur-sm px-6 py-2 rounded-lg z-10">
      <div className="flex justify-between">
        <Button variant="text" size="xs" label="Home" onClick={goHome} />

        <div className="flex flex-row gap-2 justify-center items-center">
          <Button
            label="Get started"
            size="xs"
            color="special"
            onClick={postAJob}
          />
          <Text as="span" size="xs">
            for free
          </Text>
        </div>
      </div>
    </div>
  )
}

export default GetStarted
