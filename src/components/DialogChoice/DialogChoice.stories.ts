import type { Meta, StoryObj } from "@storybook/vue3-vite";

import DialogChoice from "./DialogChoice.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/DialogChoice",
  component: DialogChoice,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof DialogChoice>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Green: Story = {
  args: {
    color: "green",
    label: "Let's go shopping.",
  },
};
export const Yellow: Story = {
  args: {
    color: "yellow",
    label: "Let's go to the movies.",
  },
};
export const Pink: Story = {
  args: {
    color: "pink",
    label: "Let's go to the park.",
  },
};
