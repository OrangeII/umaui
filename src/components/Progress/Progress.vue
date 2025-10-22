<template>
  <progress
    :class="styles.progress"
    :value="props.value"
    :min="props.min"
    :max="props.max"
  ></progress>
</template>

<script setup lang="ts">
import styles from "./Progress.module.scss";

interface ProgressProps {
  min?: number;
  max?: number;
  value?: number;
  showProgressText?: boolean;
}
const props = withDefaults(defineProps<ProgressProps>(), {
  min: 0,
  max: 100,
  showProgressText: false,
});
</script>
