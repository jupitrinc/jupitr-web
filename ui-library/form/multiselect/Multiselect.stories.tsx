import type { Meta, StoryObj } from "@storybook/react"
import { Multiselect } from "./Multiselect"

const meta: Meta<typeof Multiselect> = {
  title: "Form/Multiselect",
  component: Multiselect,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Multiselect>

const data = [
  { id: "1", name: "Wade Cooper" },
  { id: "2", name: "Arlene Mccoy" },
  { id: "3", name: "Devon Webb" },
  { id: "4", name: "Tom Cook" },
  { id: "5", name: "Tanya Fox" },
  { id: "6", name: "Hellen Schmidt" },
]

export const multiselect: Story = {
  args: {
    options: data,
  },
}
