import { Divider } from "ui-library/content/divider/Divider"
import { Text } from "ui-library/text/Text"

const VideoTitle: React.FC<{ name: string; title?: string }> = ({
  name,
  title,
}) => {
  if (name) {
    return (
      <div className="flex flex-col">
        <Text as="span" size="lg">
          {name}
        </Text>

        {title && (
          <Text as="span" size="sm">
            {title}
          </Text>
        )}

        <div className="mt-3">
          <Divider />
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default VideoTitle
