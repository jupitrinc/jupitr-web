import clsx from "clsx"
import { pillStyles } from "./Pill.styles"
import { PillProps } from "./Pill.types"
import {
  ThemeColorEnum,
  ThemeSizeEnum,
  ThemeVariantEnum,
} from "ui-library/_theme/Theme.types"
import { X } from "lucide-react"
import { Button } from "ui-library/button/Button"

export const Pill: React.FC<PillProps> = (pill) => {
  const styles = pillStyles
  return (
    <span
      className={clsx(
        styles.pill,
        styles.variant[
          pill.variant ? pill.variant : ThemeVariantEnum.contained
        ],
        styles.color[pill.color ? pill.color : ThemeColorEnum.standard],
        styles.size[pill.size ? pill.size : ThemeSizeEnum.sm]
      )}
    >
      <span>{pill.label}</span>
      {pill.type === "clickable" && (
        <Button
          size="xs"
          color={pill.color ? pill.color : ThemeColorEnum.standard}
          variant="text"
          icon={<X className="h-4 w-4" />}
          onClick={pill.onClick}
        />
      )}
    </span>
  )
}
