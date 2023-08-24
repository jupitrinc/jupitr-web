import { CardTypeEnum } from "./Card.types"

export const cardBaseStyles = {
  container: "flex flex-col justify-center",
  active: "ring-gray-900/20 bg-gray-100",
  type: {
    [CardTypeEnum.static]: "ring-1 ring-gray-900/10 rounded-lg w-full p-3",
    [CardTypeEnum.linked]:
      "ring-1 ring-gray-900/10 rounded-lg w-full p-3 cursor-pointer overflow-hidden hover:ring-gray-900/20 hover:bg-gray-100",
    [CardTypeEnum.section]: "gap-10 bg-white rounded-lg p-5 sm:p-10",
  },
}
