import type { Meta, StoryObj } from "@storybook/react"

import { CheckboxGroup } from "./CheckboxGroup"

const meta: Meta<typeof CheckboxGroup> = {
  title: "Form/checkbox/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
}

const items = [
  {
    label: "option 1",
    name: "option 1",
    value: "option 1",
    checked: false,
    onChange: (e) => console.log(!e.target.checked),
  },
  {
    label: "option 2",
    name: "option 2",
    value: "option 2",
    checked: true,
    onChange: (e) => console.log(!e.target.checked),
  },
  {
    label: "option 3",
    value: "option 3",
    name: "option 3",
    checked: true,
    onChange: (e) => console.log(!e.target.checked),
  },
]
export default meta
type Story = StoryObj<typeof CheckboxGroup>

export const group: Story = {
  args: {
    items: items,
  },
}
