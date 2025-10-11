<template>
  <button :class="[styles['uma-dialog-choice'], styles[props.color]]">
    <div :class="styles.overlay"></div>
    <div :class="styles.inner">
      <svg
        width="25"
        :class="styles.icon"
        viewBox="0 0 25 29"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.5 28.5L0 24.5L2.5 22.5C-1.16667 15.1667 -2.49998 0.5 12.5 0.5C27.5 0.5 26.1667 15.1667 22.5 22.5L25 24.5L22 28.5L15.5 24C18.5 18.5 20.5 7.99999 12.5 7.99999C4.49999 7.99999 6.5 18.8333 9.5 24L3.5 28.5Z"
        />
      </svg>

      <div :class="styles.text">
        <slot>
          {{ props.label }}
        </slot>
      </div>

      <div :class="styles.decoration">
        <div :class="styles['decoration-front']">
          <div></div>
        </div>
        <div :class="styles['decoration-back']">
          <div></div>
        </div>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import styles from "./DialogChoice.module.scss";

interface DialogChoiceProps {
  color?: "green" | "yellow" | "pink";
  label?: string;
}
const props = withDefaults(defineProps<DialogChoiceProps>(), {
  color: "green",
  label: "",
});
</script>
