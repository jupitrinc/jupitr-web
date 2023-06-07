import type { Meta, StoryObj } from "@storybook/react"

import { Modal } from "./Modal"

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Modal>

export const open: Story = {
  args: {
    open: true,
  },
}
