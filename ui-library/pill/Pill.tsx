import { PillProps } from "./Pill.types"

export const Pill: React.FC<PillProps> = (pill) => {
  return (
    <span
      className="px-3 py-2 text-xs rounded-full text-gray-500 bg-gray-50"
      data-testid="pill"
    >
      {pill.label}
    </span>
  )
}
