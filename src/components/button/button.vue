<template>
  <button @click="onClick()" :class="styles.button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import styles from "./button.module.scss";

const emit = defineEmits<{
  (e: "click"): void;
}>();

function onClick() {
  emit("click");
}
</script>
