<template>
  <button
    :class="[
      styles.button,
      props.primary ? styles.primary : null,
      props.medium ? styles.medium : null,
      props.small ? styles.small : null,
    ]"
    @click="onClick"
    :disabled="props.disabled"
  >
    <span :class="styles.content">
      <span v-if="$slots.icon" :class="styles.icon">
        <slot name="icon"></slot>
      </span>
      <span>
        {{ props.label }}
      </span>
    </span>
    <span :class="styles.decoration">
      <span :class="styles['decoration-front']"></span>
      <span :class="styles['decoration-back']"></span>
    </span>
    <span :class="styles['inner-border']"></span>

    <span
      v-if="!props.suppressClickDecoration"
      :class="styles['click-decoration']"
    >
      <span :class="styles['left']">
        <transition name="pop-in" @after-enter="showDecoration = false">
          <ClickDecoration v-if="showDecoration" />
        </transition>
      </span>
      <span :class="styles['right']">
        <transition name="pop-in" @after-enter="showDecoration = false">
          <ClickDecoration v-if="showDecoration" />
        </transition>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import styles from "./Button.module.scss";
import ClickDecoration from "./ButtonClickDecoration.vue";

const showDecoration = ref<boolean>(false);

interface ButtonProps {
  primary?: boolean;
  small?: boolean;
  medium?: boolean;
  label?: string;
  suppressClickDecoration?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
  small: false,
  label: "",
  suppressClickDecoration: false,
});

function onClick() {
  if (!props.suppressClickDecoration) {
    showDecoration.value = true;
  }
}
</script>

<style scoped>
.pop-in-enter-active {
  animation: pop-in 0.25s linear 1;
}

@keyframes pop-in {
  0% {
    animation-timing-function: cubic-bezier(0.33333, 0.66667, 0.66667, 1);
    transform: translateY(0) scale(0.6);
    opacity: 1;
  }
  20%,
  50% {
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);
    transform: translate(-1rem, -1.2rem) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-0.8rem, -0rem) scale(0.9);
    opacity: 1;
  }
}
</style>
