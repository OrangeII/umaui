import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Button from "./Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    primary: true,
    label: "Next",
  },
};

export const Neutral: Story = {
  args: {
    primary: false,
    label: "Cancel",
  },
};

export const small: Story = {
  args: {
    label: "Details",
    small: true,
  },
};

export const withIcon: Story = {
  args: {
    primary: false,
    label: "Purchase Carats",
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button ...="args">
        <template #icon>
          <div style="font-size: 3.75rem">🥕</div>
        </template>
      </Button>
    `,
  }),
};

export const Disabled: Story = {
  args: {
    label: "Purchase Carats",
    disabled: true,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `
      <Button ...="args" disabled>
        <template #icon>
          <div style="font-size: 3.75rem">🥕</div>
        </template>
      </Button>
    `,
  }),
};
