import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "./Button"
import { RocketIcon } from "lucide-react"
import { GoogleIcon } from "ui-library/icon/Icon"

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Button>

export const extraSmall: Story = {
  args: {
    label: "Get started",
    size: "xs",
    color: "standard",
  },
}

export const small: Story = {
  args: {
    label: "Get started",
    size: "sm",
    color: "standard",
  },
}
export const base: Story = {
  args: {
    label: "Get started",
    size: "base",
    color: "standard",
  },
}
export const large: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "standard",
  },
}

export const special: Story = {
  args: {
    label: "Get started",
    size: "xl",
    color: "special",
  },
}

export const important: Story = {
  args: {
    label: "Get started",
    size: "xl",
    color: "important",
  },
}
export const dangerous: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "dangerous",
  },
}
export const standard: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "standard",
  },
}

export const text: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "important",
    variant: "text",
  },
}

export const outlined: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "important",
    variant: "outlined",
  },
}

export const contained: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "important",
    variant: "contained",
  },
}

export const icon: Story = {
  args: {
    size: "lg",
    color: "important",
    variant: "contained",
    icon: <RocketIcon />,
  },
}

export const labelIcon: Story = {
  args: {
    size: "lg",
    color: "important",
    variant: "contained",
    icon: <GoogleIcon className="inline h-6 w-6" />,
    label: "with Google",
  },
}

export const disabled: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "important",
    variant: "contained",
    disabled: true,
  },
}

export const arrow: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "important",
    variant: "contained",
    arrow: true,
  },
}

export const loading: Story = {
  args: {
    label: "Get started",
    size: "lg",
    color: "important",
    variant: "contained",
    loading: true,
  },
}
