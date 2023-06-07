import clsx from "clsx"
import { pillStyles } from "./Pill.styles"
import { PillProps } from "./Pill.types"

export const Pill: React.FC<PillProps> = (pill) => {
  return (
    <span
      className={clsx(
        pillStyles.pill,
        pillStyles.variant[
          pill.variant ? pill.variant : pillStyles.variant.contained
        ],
        pillStyles.type[pill.type ? pill.type : pillStyles.type.default],
        pillStyles.size[pill.size ? pill.size : pillStyles.size.small],
        pillStyles.rounded.full
      )}
    >
      {pill.label}
    </span>
  )
}
