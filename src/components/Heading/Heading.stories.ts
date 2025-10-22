import type { Meta, StoryObj } from "@storybook/vue3";
import Heading from "./Heading.vue";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Heading>;

const defaultTemplate = `
  <Heading v-bind="args">
    <h3>Graphics</h3>
  </Heading>
`.trim();
export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: defaultTemplate,
      },
    },
  },
  render: (args) => ({
    components: { Heading },
    setup() {
      return { args };
    },
    template: defaultTemplate,
  }),
};
