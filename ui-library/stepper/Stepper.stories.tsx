import type { Meta, StoryObj } from "@storybook/react"

import { Stepper } from "./Stepper"

const meta: Meta<typeof Stepper> = {
  title: "Stepper",
  component: Stepper,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Stepper>
const data = [
  {
    active: true,
    step_label: "1",
    name: "Details",
    onclick: () => {
      return
    },
  },
  {
    active: false,
    step_label: "2",
    name: "Skills",
    onclick: () => {
      return
    },
  },
  {
    active: false,
    step_label: "3",
    name: "Filters",
    onclick: () => {
      return
    },
  },
]

export const activeStepper: Story = {
  args: {
    steps: data,
    clickable: true,
  },
}
