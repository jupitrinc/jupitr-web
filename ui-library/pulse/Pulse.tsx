import { themeStyles } from "ui-library/_theme/Theme.styles"

const Pulse: React.FC = () => {
  return (
    <span className="relative flex h-3 w-3">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${themeStyles.backgroundColor.special.default}  opacity-75`}
      ></span>
      <span
        className={`relative inline-flex rounded-full h-3 w-3 ${themeStyles.backgroundColor.special.default}`}
      ></span>
    </span>
  )
}

export default Pulse
