<template>
  <span
    :class="[
      styles['click-decoration'],
      props.primary ? styles.primary : styles.neutral,
    ]"
  >
    <span :class="styles['left']">
      <transition name="pop-in" @after-enter="showDecoration = false">
        <ButtonClickDecorationSparkle v-if="showDecoration" />
      </transition>
    </span>
    <span :class="styles['right']">
      <transition name="pop-in" @after-enter="showDecoration = false">
        <ButtonClickDecorationSparkle v-if="showDecoration" />
      </transition>
    </span>
  </span>
</template>

<script setup lang="ts">
import { defineModel } from "vue";
import styles from "./ButtonClickDecoration.module.scss";
import ButtonClickDecorationSparkle from "./ButtonClickDecorationSparkle.vue";

const showDecoration = defineModel<boolean>();

interface ButtonClickDecorationProps {
  primary?: boolean;
}
const props = withDefaults(defineProps<ButtonClickDecorationProps>(), {
  primary: false,
});
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
