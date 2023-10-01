import { Text } from "ui-library/text/Text"

const VideoTitle: React.FC<{ name: string; title: string }> = ({
  name,
  title,
}) => {
  if (name && title) {
    return (
      <div className="flex flex-col mt-3">
        {name && (
          <Text as="span" size="lg">
            {name}
          </Text>
        )}
        {title && (
          <Text as="span" size="sm">
            {title}
          </Text>
        )}
      </div>
    )
  } else {
    return null
  }
}

export default VideoTitle
