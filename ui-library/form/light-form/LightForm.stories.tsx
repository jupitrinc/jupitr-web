import type { Meta, StoryObj } from "@storybook/react"

import { LightForm } from "./LightForm"
import { PlusIcon } from "lucide-react"

const meta: Meta<typeof LightForm> = {
  title: "Form/LightForm",
  component: LightForm,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof LightForm>

export const lightForm: Story = {
  args: {
    placeholder: "",
    icon: <PlusIcon />,
  },
}
