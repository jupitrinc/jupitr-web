import clsx from "clsx"
import { pillStyles } from "./Pill.styles"
import { PillProps } from "./Pill.types"
import {
  ThemeColorEnum,
  ThemeSizeEnum,
  ThemeVariantEnum,
} from "ui-library/_theme/Theme.types"

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
        styles.size[pill.size ? pill.size : ThemeSizeEnum.sm],
        styles.rounded.full
      )}
    >
      {pill.label}
    </span>
  )
}
