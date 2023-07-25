import type { Meta, StoryObj } from "@storybook/react"

import { Card } from "./Card"
import { Text } from "ui-library/text/Text"
import { Image } from "ui-library/image/Image"
import { Button } from "ui-library/button/Button"
import { sampleData } from "ui-library/_sample/sample.data"

const SampleComponent = () => (
  <div className="space-y-1 flex-col">
    <Image src={sampleData.image[1]} alt="" className="w-full" />
    <div className="flex space-y-3 flex-col p-5">
      <Text as="h1" size="lg">
        Card title
      </Text>
      <Text as="p" size="base">
        This is a card description. Feel free to edit me 😁
      </Text>
      <div className="">
        <Button
          label="Get started"
          color="standard"
          variant="outlined"
          size="base"
          onClick={(e) => {
            e.stopPropagation()
            console.log("button clicked")
          }}
        />
      </div>
    </div>
  </div>
)

const meta: Meta<typeof Card> = {
  title: "Content/Card",
  component: Card,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Card>

export const linked: Story = {
  args: {
    onClick: () => console.log("card clicked"),
    children: <SampleComponent />,
    type: "linked",
  },
}

export const active: Story = {
  args: {
    children: <SampleComponent />,
    active: true,
  },
}

export const Static: Story = {
  args: {
    children: <SampleComponent />,
    type: "static",
  },
}

export const Section: Story = {
  args: {
    children: <SampleComponent />,
    type: "section",
  },
}
