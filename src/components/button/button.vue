<template>
  <button
    :class="[
      styles.button,
      props.primary ? styles.primary : styles.neutral,
      props.small ? styles.small : null,
    ]"
  >
    <div :class="styles.content">
      <slot name="content">
        <div v-if="slots.icon" :class="styles.icon">
          <slot name="icon"></slot>
        </div>
        <div>
          {{ props.label }}
        </div>
      </slot>
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
  small?: boolean;
  label?: string;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
  small: false,
  label: "",
});

const slots = defineSlots<{
  content: () => any;
  icon: () => any;
  label: () => any;
}>();
</script>
