import clsx from "clsx"
import { cardBaseStyles } from "./Card.styles"
import { CardProps } from "./Card.types"
import { ThemeColorEnum } from "ui-library/_theme/Theme.types"

export const Card: React.FC<CardProps> = (card) => {
  const styles = cardBaseStyles
  return (
    <div
      onClick={card.onClick}
      className={clsx(
        styles.container,
        styles.color[card.color ? card.color : ThemeColorEnum.standard],
        card.active && styles.active
      )}
    >
      {card.children}
    </div>
  )
}
