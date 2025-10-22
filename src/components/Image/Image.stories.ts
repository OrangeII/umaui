import type { Meta, StoryObj } from "@storybook/vue3";
import Image from "./Image.vue";

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  argTypes: {
    fade: {
      control: { type: "select" },
      options: ["none", "top", "bottom", "left", "right"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://placehold.co/110x92/4CB2F1/FFFFFF?text=placeholder",
  },
  render: (args) => ({
    components: { Image },
    setup() {
      return { args };
    },
    template: '<Image v-bind="args"></Image>',
  }),
};
