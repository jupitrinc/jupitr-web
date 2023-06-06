import type { Meta, StoryObj } from "@storybook/react"

import { Textarea } from "./Textarea"

const meta: Meta<typeof Textarea> = {
  title: "Form/Textarea",
  component: Textarea,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Textarea>

export const value: Story = {
  args: {
    label: "Value",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ligula tincidunt, pellentesque ligula sit amet, ultrices urna. Nulla sagittis sed nisi at commodo. Morbi aliquam elit sed tellus porta, ac volutpat odio mattis. Praesent viverra urna ante. Aliquam erat volutpat. Cras consectetur et nisi id gravida. Proin gravida risus eget ex sodales accumsan. Phasellus tincidunt sapien id porta dignissim.",
  },
}

export const disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ligula tincidunt, pellentesque ligula sit amet, ultrices urna. Nulla sagittis sed nisi at commodo. Morbi aliquam elit sed tellus porta, ac volutpat odio mattis. Praesent viverra urna ante. Aliquam erat volutpat. Cras consectetur et nisi id gravida. Proin gravida risus eget ex sodales accumsan. Phasellus tincidunt sapien id porta dignissim.",
  },
}

export const noLabel: Story = {
  args: {
    label: "",
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ligula tincidunt, pellentesque ligula sit amet, ultrices urna. Nulla sagittis sed nisi at commodo. Morbi aliquam elit sed tellus porta, ac volutpat odio mattis. Praesent viverra urna ante. Aliquam erat volutpat. Cras consectetur et nisi id gravida. Proin gravida risus eget ex sodales accumsan. Phasellus tincidunt sapien id porta dignissim.",
  },
}

export const placeholder: Story = {
  args: {
    label: "Placeholder",
    placeholder: "Type your text here.",
  },
}

export const autofocus: Story = {
  args: {
    label: "Auto-focus",
    autoFocus: true,
  },
}

export const maxLength: Story = {
  args: {
    label: "Max Length",
    maxLength: 50,
    value:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed ligula tincidunt, pellentesque ligula sit amet, ultrices urna. Nulla sagittis sed nisi at commodo. Morbi aliquam elit sed tellus porta, ac volutpat odio mattis. Praesent viverra urna ante. Aliquam erat volutpat. Cras consectetur et nisi id gravida. Proin gravida risus eget ex sodales accumsan. Phasellus tincidunt sapien id porta dignissim.",
  },
}
