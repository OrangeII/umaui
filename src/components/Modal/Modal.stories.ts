import type { Meta, StoryObj } from "@storybook/vue3";
import Modal from "./Modal.vue";
import Button from "../Button/Button.vue";
import { useModal } from "./modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    title: "Modal Title",
    closeOnEscape: true,
    closeOnClickOutside: true,
  },
  parameters: {
    docs: {
      source: {
        code: `
  <template>
    <Button @click="openModal">Open Modal</Button>
    <Modal v-bind="args" v-model="isOpen">        
      <p>Modal Content</p>
      <template #footer>
        <Button @click="closeModal">Close Modal</Button>
      </template>
    </Modal>
  </template>
  
  <script setup>
  import { useModal } from "./modal";
  
  const { isOpen, openModal, closeModal } = useModal();
  </script>
        `,
      },
    },
  },
  render: (args) => ({
    components: { Modal, Button },
    setup() {
      const { isOpen, openModal, closeModal } = useModal();
      return { args, isOpen, openModal, closeModal };
    },
    template: `
      <Button @click="openModal">Open Modal</Button>
      <Modal v-bind="args" v-model="isOpen">        
        <p>Modal Content</p>
        <template #footer>
          <Button @click="closeModal">Close Modal</Button>
        </template>
      </Modal>`,
  }),
};
