import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Rank from "./Rank.vue";

const ranks = ["A", "B", "C", "D", "E", "F", "G", "S", "SS"] as const;
type RankType = (typeof ranks)[number];

const meta = {
  title: "Components/Rank",
  component: Rank,
  tags: ["autodocs"],
  argTypes: {
    rank: {
      control: { type: "select" },
      options: ranks,
      defaultValue: "A",
    },
  },
  args: {},
} satisfies Meta<typeof Rank>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const make = (rank: RankType): Story => ({
  args: { rank },
  render: (args) => ({
    components: { Rank },
    setup() {
      return { args };
    },
    template: '<Rank v-bind="args" />',
  }),
});
export const A = make("A");
export const B = make("B");
export const C = make("C");
export const D = make("D");
export const E = make("E");
export const F = make("F");
export const G = make("G");
export const S = make("S");
export const SS = make("SS");
