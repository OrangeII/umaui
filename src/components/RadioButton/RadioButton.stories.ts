import type { Meta, StoryObj } from "@storybook/vue3-vite";

import RadioButton from "./RadioButton.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Normal: Story = {
  args: {
    caption: "Standard",
  },
  render: (args) => ({
    components: { RadioButton },
    setup() {
      return { args };
    },
    template:
      '<RadioButton v-bind="args">Standard</RadioButton> <RadioButton v-bind="args">Basic</RadioButton>',
  }),
};
