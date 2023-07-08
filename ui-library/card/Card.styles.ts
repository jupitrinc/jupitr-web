import { CardTypeEnum } from "./Card.types"

export const cardBaseStyles = {
  container: "flex flex-col ring-1 ring-gray-900/10 rounded-lg w-full p-3",
  active: "ring-gray-900/20 bg-gray-100",
  type: {
    [CardTypeEnum.static]: "",
    [CardTypeEnum.linked]:
      "cursor-pointer overflow-hidden hover:ring-gray-900/20 hover:bg-gray-100",
  },
}
