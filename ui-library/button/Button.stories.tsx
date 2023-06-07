import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"
import { RocketIcon } from "lucide-react"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const small: Story = {
  args: {
    label: "Get started",
    size: "small",
    type: "standard",
  },
}
export const medium: Story = {
  args: {
    label: "Get started",
    size: "medium",
    type: "standard",
  },
}
export const large: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "standard",
  },
}

export const important: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "important",
  },
}
export const dangerous: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "dangerous",
  },
}
export const standard: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "standard",
  },
}

export const text: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "important",
    variant: "text",
  },
}

export const outlined: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "important",
    variant: "outlined",
  },
}

export const contained: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "important",
    variant: "contained",
  },
}

export const icon: Story = {
  args: {
    size: "large",
    type: "important",
    variant: "contained",
    icon: <RocketIcon className="h-10 w-10" />,
  },
}

export const disabled: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "important",
    variant: "contained",
    disabled: true,
  },
}

export const arrow: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "important",
    variant: "contained",
    arrow: true,
  },
}

export const loading: Story = {
  args: {
    label: "Get started",
    size: "large",
    type: "important",
    variant: "contained",
    loading: true,
  },
}
