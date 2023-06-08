import type { Meta, StoryObj } from "@storybook/react"

import { Text } from "./Text"
const meta: Meta<typeof Text> = {
  title: "Text",
  component: Text,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Text>

export const h1: Story = {
  args: {
    as: "h1",
    children: "i am a text",
  },
}

export const h2: Story = {
  args: {
    as: "h2",
    children: "i am a text",
  },
}

export const h3: Story = {
  args: {
    as: "h3",
    children: "i am a text",
  },
}

export const h4: Story = {
  args: {
    as: "h4",
    children: "i am a text",
  },
}

export const h5: Story = {
  args: {
    as: "h5",
    children: "i am a text",
  },
}

export const h6: Story = {
  args: {
    as: "h6",
    children: "i am a text",
  },
}

export const p: Story = {
  args: {
    as: "p",
    children: "i am a text",
  },
}

export const span: Story = {
  args: {
    as: "span",
    children: "i am a text",
  },
}
