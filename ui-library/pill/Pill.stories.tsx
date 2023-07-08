import type { Meta, StoryObj } from "@storybook/react"

import { Pill } from "./Pill"

const meta: Meta<typeof Pill> = {
  title: "Pill",
  component: Pill,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Pill>

export const extraSmall: Story = {
  args: {
    label: "storybook",
    size: "xs",
    color: "standard",
  },
}

export const small: Story = {
  args: {
    label: "storybook",
    size: "sm",
    color: "standard",
  },
}
export const medium: Story = {
  args: {
    label: "storybook",
    size: "base",
    color: "standard",
  },
}
export const large: Story = {
  args: {
    label: "storybook",
    size: "lg",
    color: "standard",
  },
}
export const extraLarge: Story = {
  args: {
    label: "storybook",
    size: "xl",
    color: "standard",
  },
}

export const special: Story = {
  args: {
    label: "storybook",
    size: "xl",
    color: "special",
  },
}

export const important: Story = {
  args: {
    label: "storybook",
    size: "lg",
    color: "important",
  },
}
export const dangerous: Story = {
  args: {
    label: "storybook",
    size: "lg",
    color: "dangerous",
  },
}
export const standard: Story = {
  args: {
    label: "storybook",
    size: "lg",
    color: "standard",
  },
}

export const text: Story = {
  args: {
    label: "storybook",
    size: "lg",
    color: "important",
    variant: "text",
  },
}

export const outlined: Story = {
  args: {
    label: "storybook",
    size: "lg",
    color: "important",
    variant: "outlined",
  },
}

export const contained: Story = {
  args: {
    label: "storybook",
    size: "lg",
    color: "important",
    variant: "contained",
  },
}
