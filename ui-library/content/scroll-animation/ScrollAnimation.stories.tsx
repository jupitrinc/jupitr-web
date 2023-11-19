import type { Meta, StoryObj } from "@storybook/react"

import { ScrollAnimation, ScrollAnimationItem } from "./ScrollAnimation"
const meta: Meta<typeof ScrollAnimation> = {
  title: "Content/ScrollAnimation",
  component: ScrollAnimation,
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof ScrollAnimation>

export const section_header: Story = {
  args: {
    children: (
      <>
        <ScrollAnimationItem>hello 1</ScrollAnimationItem>{" "}
        <ScrollAnimationItem>hello 2</ScrollAnimationItem>
        <ScrollAnimationItem>hello 3</ScrollAnimationItem>
        <ScrollAnimationItem>hello 4</ScrollAnimationItem>
        <ScrollAnimationItem>hello 5</ScrollAnimationItem>
      </>
    ),
  },
}
