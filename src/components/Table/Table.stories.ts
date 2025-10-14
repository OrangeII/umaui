import type { Meta, StoryObj } from "@storybook/vue3-vite";

import Table from "./Table.vue";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */

const verticalTemplate = `
  <Table orientation="vertical">
    <thead>
      <tr>
        <th>🥾 Speed</th>
        <th>🧡 Stamina</th>
        <th>💪 Power</th>
        <th>🔥 Guts</th>
        <th>🎓 Wit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F</td>
        <td>D</td>
        <td>C</td>
        <td>B</td>
        <td>A</td>
      </tr>
    </tbody>
  </Table>`;

export const Vertical: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: verticalTemplate,
      },
    },
  },
  render: (args) => ({
    components: { Table },
    setup: () => ({ args }),
    template: verticalTemplate,
  }),
};

const horizontalTemplate = `
  <Table orientation="horizontal">
    <tr>
      <th>Track</th>
      <td>Turf A</td>
      <td>Dirt G</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th>Distance</th>
      <td>Turf A</td>
      <td>Mile B</td>
      <td>Medium G</td>
      <td>Long G</td>
    </tr>
    <tr>
      <th>Style</th>
      <td>Front A</td>
      <td>Pace A</td>
      <td>Late F</td>
      <td>End G</td>
    </tr>
  </Table>`;
export const Horizontal: Story = {
  args: {},
  parameters: {
    docs: {
      source: {
        code: horizontalTemplate,
      },
    },
  },
  render: (args) => ({
    components: { Table },
    setup: () => ({ args }),
    template: horizontalTemplate,
  }),
};
