import type { Meta, StoryObj } from "@storybook/react"

import { TextInput } from "./TextInput"

const meta: Meta<typeof TextInput> = {
  title: "Form/TextInput",
  component: TextInput,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TextInput>

export const placeholder: Story = {
  args: {
    placeholder: "Search ...",
  },
}

export const label: Story = {
  args: {
    label: "Field label",
  },
}

export const disabled: Story = {
  args: {
    disabled: true,
    value: "Lorem ipsum dolor sit amet",
  },
}

export const autofocus: Story = {
  args: {
    autoFocus: true,
  },
}

export const maxLength: Story = {
  args: {
    maxLength: 10,
  },
}

export const ghost: Story = {
  args: {
    maxLength: 10,
    placeholder: "Ava Sky",
    ghost: true,
  },
}
