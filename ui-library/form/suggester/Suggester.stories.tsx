import type { Meta, StoryObj } from "@storybook/react"
import { Suggester } from "./Suggester"

const meta: Meta<typeof Suggester> = {
  title: "Suggester",
  component: Suggester,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Suggester>

const data = [
  { id: "1", name: "Wade Cooper" },
  { id: "2", name: "Arlene Mccoy" },
  { id: "3", name: "Devon Webb" },
  { id: "4", name: "Tom Cook" },
  { id: "5", name: "Tanya Fox" },
  { id: "6", name: "Hellen Schmidt" },
]

export const suggester: Story = {
  args: {
    data: data,
  },
}
