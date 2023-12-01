import { Fragment } from "react"
import { Check, Circle } from "lucide-react"
import { Text } from "ui-library/text/Text"
import { Divider } from "../divider/Divider"
import { CheckListProps } from "./CheckList.types"

export const CheckList: React.FC<CheckListProps> = (props) => {
  return (
    <div className="flex flex-row items-center justify-between gap-1 overflow-auto rounded-lg">
      {props.items.map((item, index, array) => (
        <Fragment key={item.label}>
          <CheckItem label={item.label} checked={item.checked} />
          {index !== array.length - 1 && <Divider theme="dark" />}
        </Fragment>
      ))}
    </div>
  )
}

const CheckItem = ({ label, checked }) => {
  const completedStyled =
    "w-6 h-6 text-white ring-0 bg-gradient-to-r from-orange-400 to-rose-400 from-orange-400 to-rose-400"
  const notCumpletedStyled = "w-6 h-6 text-gray-400 ring-gray-900/10"

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <figure
        className={`flex items-center justify-center rounded-full ${
          checked ? completedStyled : notCumpletedStyled
        }`}
      >
        {checked ? <Check className="h-5 w-5" /> : <Circle />}
      </figure>
      <Text as="span" size="sm" align="center">
        {label}
      </Text>
    </div>
  )
}
