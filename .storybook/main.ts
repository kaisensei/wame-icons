import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  "stories": [
    {
      directory: "../src",
      files: "**/*.stories.tsx",
    },
  ],

  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": true 
      }
    },
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],

  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  },

  docs: {
    autodocs: true
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  },

};
export default config;