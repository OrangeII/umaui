<template>
  <Teleport to="body">
    <div
      :class="styles.modal"
      v-if="open"
      @click.self="props.closeOnClickOutside ? closeModal() : null"
    >
      <div :class="styles.container">
        <div :class="styles.title">{{ props.title }}</div>
        <div :class="styles.content">
          <slot> </slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { nextTick, watch } from "vue";
import styles from "./Modal.module.scss";

const open = defineModel<boolean>();
interface ModalProps {
  title?: string;
  closeOnEscape?: boolean;
  closeOnClickOutside?: boolean;
}
const props = withDefaults(defineProps<ModalProps>(), {
  title: "",
  closeOnEscape: true,
  closeOnClickOutside: true,
});

watch(
  () => open.value,
  async (newVal) => {
    if (newVal) {
      await nextTick();
      document.addEventListener("keydown", closeModalOnEscape);
    } else {
      document.removeEventListener("keydown", closeModalOnEscape);
    }
  },
  { flush: "post" }
);

function closeModalOnEscape(e: KeyboardEvent) {
  if (e.key === "Escape" && props.closeOnEscape) {
    closeModal();
  }
}

function closeModal() {
  if (!open.value) return;
  open.value = false;
}
</script>
