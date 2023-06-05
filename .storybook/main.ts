import type { StorybookConfig } from "@storybook/nextjs"
const config: StorybookConfig = {
  stories: [
    "../ui-library/**/*.stories.@(js|jsx|ts|tsx)",
    "../ui-library/**/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
}
export default config
