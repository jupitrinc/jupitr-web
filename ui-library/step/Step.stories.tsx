import type { Meta, StoryObj } from "@storybook/react"

import { Step } from "./Step"

const meta: Meta<typeof Step> = {
  title: "Step",
  component: Step,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Step>

export const activeStep: Story = {
  args: {
    active: true,
    number: 1,
    label: "User details",
  },
}

export const defaultStep: Story = {
  args: {
    active: false,
    number: 1,
    label: "User details",
  },
}
