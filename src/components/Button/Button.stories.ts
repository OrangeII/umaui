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

export const Neutral: Story = {
  args: {
    label: "Cancel",
  },
};

export const Primary: Story = {
  args: {
    primary: true,
    label: "Next",
  },
};

export const medium: Story = {
  args: {
    label: "Exchange",
    primary: true,
    medium: true,
  },
};

export const disabled: Story = {
  args: {
    label: "Exchange",
    primary: true,
    medium: true,
    disabled: true,
  },
};

export const small: Story = {
  args: {
    label: "Details",
    small: true,
  },
};

const withIconTemplate = `
    <Button label="Purchase Carats">
      <template #icon>
        <div style="font-size: 3.75rem">🥕</div>
      </template>
    </Button>
  `;
export const withIcon: Story = {
  args: {
    label: "Purchase Carats",
  },
  parameters: {
    docs: {
      source: {
        code: withIconTemplate,
      },
    },
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: withIconTemplate,
  }),
};
