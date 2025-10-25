<template>
  <div>
    <progress :class="styles.progress" v-bind="props"></progress>
    <div v-if="showProgressText" :class="styles['progress-text']">
      {{ props.value }}/{{ props.max }}
    </div>
  </div>
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
