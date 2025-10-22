import type { Meta, StoryObj } from "@storybook/vue3";
import Progress from "./Progress.vue";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: '<Progress v-bind="args"></Progress>',
  }),
};
