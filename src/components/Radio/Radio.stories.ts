import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Radio from "./Radio.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Radio",
  component: Radio,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Default: Story = {
  args: {
    caption: "Standard",
  },
  render: (args) => ({
    components: { Radio: Radio },
    setup() {
      return { args };
    },
    template:
      '<Radio v-bind="args">Standard</Radio> <Radio v-bind="args">Basic</Radio>',
  }),
};
