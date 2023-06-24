import type { Meta, StoryObj } from "@storybook/react"

import { NumberInput } from "./NumberInput"

const meta: Meta<typeof NumberInput> = {
  title: "Form/NumberInput",
  component: NumberInput,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof NumberInput>

export const placeholder: Story = {
  args: {
    placeholder: "123 ...",
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
    placeholder: "123 ...",
  },
}

export const autofocus: Story = {
  args: {
    autoFocus: true,
  },
}
