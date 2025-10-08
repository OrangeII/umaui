<template>
  <button
    :class="[
      styles.button,
      props.primary ? styles.primary : styles.neutral,
      props.small ? styles.small : null,
    ]"
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
    <ClickDecoration />
  </button>
</template>

<script setup lang="ts">
import styles from "./Button.module.scss";
import ClickDecoration from "./ButtonClickDecoration.vue";

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
</script>
