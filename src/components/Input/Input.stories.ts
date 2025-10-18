import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "./Input.vue";

const options = [
  "text",
  "email",
  "password",
  "number",
  "search",
  "tel",
  "url",
  "date",
  "time",
  "datetime-local",
] as const;
type types = (typeof options)[number];

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

const make = (type: types): Story => ({
  args: { type },
  render: (args) => ({
    components: { Input },
    setup() {
      return { args };
    },
    template: '<Input v-bind="args" />',
  }),
});

export const Text = make("text");
export const Email = make("email");
export const Password = make("password");
export const Number = make("number");
export const Search = make("search");
export const Tel = make("tel");
export const Url = make("url");
export const Date = make("date");
export const Time = make("time");
export const DatetimeLocal = make("datetime-local");
