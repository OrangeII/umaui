<template>
  <Teleport to="body">
    <Transition name="focus">
      <div v-if="open" :class="styles.backdrop"></div>
    </Transition>
    <Transition name="show-modal">
      <div
        v-if="open"
        :class="styles.modal"
        @click.self="props.closeOnClickOutside ? closeModal() : null"
      >
        <div :class="styles.container">
          <div :class="styles.title">{{ props.title }}</div>
          <div :class="styles.content">
            <Transition name="content" appear>
              <slot></slot>
            </Transition>
          </div>
        </div>
      </div>
    </Transition>
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

<style scoped>
.show-modal-enter-active {
  animation: show-modal 0.1s linear 1;
}
@keyframes show-modal {
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.show-modal-leave-active {
  animation: hide-modal 0.15s cubic-bezier(0.55, 0.055, 0.675, 0.19) 1;
}
@keyframes hide-modal {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateY(20px);
    opacity: 0.3;
  }
}

.focus-leave-active {
  animation: hide-modal 0.1s linear 1;
  animation-delay: 0.05s;
}
@keyframes focus {
  0% {
    backdrop-filter: blur(4px);
  }
  100% {
    backdrop-filter: blur(0px);
  }
}

.content-enter-active {
  animation: show-content 0.15s linear 1;
}
@keyframes show-content {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
