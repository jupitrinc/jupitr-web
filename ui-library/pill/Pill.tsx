import clsx from "clsx"
import { pillStyles } from "./Pill.styles"
import { PillProps } from "./Pill.types"
import {
  ThemeColorEnum,
  ThemeSizeEnum,
  ThemeVariantEnum,
} from "ui-library/_theme/Theme.types"

export const Pill: React.FC<PillProps> = (pill) => {
  return (
    <span
      className={clsx(
        pillStyles.pill,
        pillStyles.variant[
          pill.variant ? pill.variant : ThemeVariantEnum.contained
        ],
        pillStyles.color[pill.color ? pill.color : ThemeColorEnum.standard],
        pillStyles.size[pill.size ? pill.size : ThemeSizeEnum.sm],
        pillStyles.rounded.full
      )}
    >
      {pill.label}
    </span>
  )
}
