<template>
  <button
    :class="[styles.button, props.primary ? styles.primary : styles.neutral]"
  >
    <div :class="styles.content">
      <slot name="content"></slot>
    </div>
    <div :class="styles.decoration">
      <div :class="styles['decoration-front']"></div>
      <div :class="styles['decoration-back']"></div>
    </div>
    <div :class="styles['inner-border']"></div>
  </button>
</template>

<script setup lang="ts">
import styles from "./button.module.scss";

interface ButtonProps {
  primary?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
});

const slots = defineSlots<{
  content(props: {}): any;
}>();
</script>
