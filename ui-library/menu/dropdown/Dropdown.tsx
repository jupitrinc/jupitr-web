import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { DropdownProps } from "./Dropdown.types"
import { Avatar } from "ui-library/avatar/avatar/Avatar"
import { MoreVertical } from "lucide-react"
import { buttonStyles } from "ui-library/button/Button.styles"
import { dropdownStyles } from "./Dropdown.styles"
import clsx from "clsx"

export const Dropdown: React.FC<DropdownProps> = (dropdown) => {
  const styles = dropdownStyles
  return (
    <Menu as="div" className={styles.menu}>
      {dropdown.type === "label" && (
        <Menu.Button
          className={`${buttonStyles.button} ${buttonStyles.color.standard} ${buttonStyles.size.xs} ${buttonStyles.rounded.xl}`}
        >
          {dropdown.label}
        </Menu.Button>
      )}

      {dropdown.type === "avatar" && (
        <Menu.Button>
          <span className="sr-only">{dropdown.label}</span>
          <Avatar size={10} image_url={dropdown.image_url} />
        </Menu.Button>
      )}

      {dropdown.type === "more" && (
        <Menu.Button
          className={`${buttonStyles.icon_button} ${buttonStyles.color.standard} ${buttonStyles.rounded.full}`}
        >
          <MoreVertical className="h-5 w-5" />
        </Menu.Button>
      )}

      <Transition
        as={Fragment}
        enter={styles.transition.enter}
        enterFrom={styles.transition.enterFrom}
        enterTo={styles.transition.enterTo}
        leave={styles.transition.leave}
        leaveFrom={styles.transition.leaveFrom}
        leaveTo={styles.transition.leaveTo}
      >
        <Menu.Items className={styles.menu_item}>
          {dropdown.items.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <button
                  onClick={item.onClick}
                  className={clsx(
                    styles.menu_item_link,
                    active && styles.menu_item_active
                  )}
                >
                  {item.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
