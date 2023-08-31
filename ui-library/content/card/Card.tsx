import clsx from "clsx"
import { cardBaseStyles } from "./Card.styles"
import { CardProps, CardTypeEnum } from "./Card.types"

export const Card: React.FC<CardProps> = (card) => {
  const styles = cardBaseStyles

  return (
    <div
      onClick={card.onClick}
      className={clsx(
        styles.container,
        styles.justify[
          card.justifyContent ? card.justifyContent : styles.justify.start
        ],
        styles.type[card.type ? card.type : CardTypeEnum.linked],
        card.active && styles.active
      )}
    >
      {card.children}
    </div>
  )
}
