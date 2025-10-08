<template>
  <button
    :class="[
      styles.button,
      props.primary ? styles.primary : styles.neutral,
      props.small ? styles.small : null,
    ]"
    @click="showClickAnimation"
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

    <span :class="styles['click-decoration']">
      <!-- left decoration -->
      <span :class="styles['left']">
        <transition name="pop-in" @after-enter="showDecoration = false">
          <ClickDecoration v-if="showDecoration" />
        </transition>
      </span>

      <!-- right decoration flipped -->
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
  label?: string;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
  small: false,
  label: "",
});

const showClickAnimation = () => {
  setTimeout(() => {
    showDecoration.value = true;
  }, 100);
};
</script>

<style scoped>
.pop-in-enter-active {
  animation: pop-in 0.3s linear 1;
}

@keyframes pop-in {
  0% {
    animation-timing-function: cubic-bezier(0.33333, 0.66667, 0.66667, 1);
    transform: translateY(0) scale(0.6);
    opacity: 1;
  }
  30% {
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);
    transform: translate(-1rem, -1rem) scale(1);
    opacity: 1;
  }
  50% {
    animation-timing-function: cubic-bezier(0.33333, 0, 0.66667, 0.33333);
    transform: translate(-1rem, -1rem) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-0rem, -0rem) scale(0.4);
    opacity: 0;
  }
}
</style>
