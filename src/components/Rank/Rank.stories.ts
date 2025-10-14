import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Rank from "./Rank.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Rank",
  component: Rank,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Rank>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const A: Story = {
  args: {
    rank: "A",
  },
};

export const B: Story = {
  args: {
    rank: "B",
  },
};

export const C: Story = {
  args: {
    rank: "C",
  },
};

export const D: Story = {
  args: {
    rank: "D",
  },
};

export const E: Story = {
  args: {
    rank: "E",
  },
};

export const F: Story = {
  args: {
    rank: "F",
  },
};

export const G: Story = {
  args: {
    rank: "G",
  },
};

export const S: Story = {
  args: {
    rank: "S",
  },
};

export const SS: Story = {
  args: {
    rank: "SS",
  },
};

const fontSizeTemplate = `
  <span style="font-size: 150px;">
    <Rank rank="F" />
  </span>`;
export const FontSize: Story = {
  args: {
    rank: "F",
  },
  parameters: {
    docs: {
      source: {
        code: fontSizeTemplate,
      },
    },
  },
  render: (args) => ({
    components: { Rank },
    setup: () => ({ args }),
    template: fontSizeTemplate,
  }),
};
