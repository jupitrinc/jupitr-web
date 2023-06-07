import type { Meta, StoryObj } from "@storybook/react"

import { Pill } from "./Pill"

const meta: Meta<typeof Pill> = {
  title: "Pill",
  component: Pill,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Pill>

export const small: Story = {
  args: {
    label: "storybook",
    size: "small",
    type: "standard",
  },
}
export const medium: Story = {
  args: {
    label: "storybook",
    size: "medium",
    type: "standard",
  },
}
export const large: Story = {
  args: {
    label: "storybook",
    size: "large",
    type: "standard",
  },
}

export const important: Story = {
  args: {
    label: "storybook",
    size: "large",
    type: "important",
  },
}
export const dangerous: Story = {
  args: {
    label: "storybook",
    size: "large",
    type: "dangerous",
  },
}
export const standard: Story = {
  args: {
    label: "storybook",
    size: "large",
    type: "standard",
  },
}

export const text: Story = {
  args: {
    label: "storybook",
    size: "large",
    type: "important",
    variant: "text",
  },
}

export const outlined: Story = {
  args: {
    label: "storybook",
    size: "large",
    type: "important",
    variant: "outlined",
  },
}

export const contained: Story = {
  args: {
    label: "storybook",
    size: "large",
    type: "important",
    variant: "contained",
  },
}
