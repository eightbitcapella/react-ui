module.exports = {
  "stories": [
    "../packages/react-ui/src/**/*.stories.mdx",
    "../packages/react-ui/src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  core: {
    builder: "webpack5"
  }
}