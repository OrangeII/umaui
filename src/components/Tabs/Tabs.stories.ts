import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Tabs from "./Tabs.vue";
import { ref } from "vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

export const Normal: Story = {
  args: {
    items: [
      { label: "Skills", value: "skills" },
      { label: "Inspiration", value: "inspiration" },
      { label: "Career Info", value: "career-info" },
    ],
  },
  render: (args: any) => ({
    components: { Tabs },
    setup() {
      let modelValue = ref("skills");
      return { args, modelValue };
    },
    template: `
      <Tabs :items="args.items" v-model="modelValue" />
    `,
  }),
};
