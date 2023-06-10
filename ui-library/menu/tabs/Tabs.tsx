import { Tab } from "@headlessui/react"
import { tabsStyles } from "./Tabs.styles"
import { TabsProps } from "./Tabs.types"
import clsx from "clsx"
import { ThemeSizeEnum } from "ui-library/_theme/Theme.types"

export const Tabs: React.FC<TabsProps> = (tabs) => {
  const styles = tabsStyles
  return (
    <div className={styles.container}>
      <Tab.Group selectedIndex={tabs.active_tab} onChange={tabs.onChange}>
        <Tab.List className={styles.tab_list}>
          {tabs.items.map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  styles.tab,
                  selected && styles.tab_active,
                  styles.size[tabs.size ? tabs.size : ThemeSizeEnum.xs]
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}
