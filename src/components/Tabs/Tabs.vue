<template>
  <div :class="styles['button-group']">
    <button
      v-for="item in props.items"
      :class="[styles.button, item.value === modelValue ? styles.active : '']"
      @click="modelValue = item.value"
      type="button"
    >
      {{ item.label }}
    </button>
  </div>
</template>
<script setup lang="ts">
import styles from "./Tabs.module.scss";
interface TabsProps {
  items: Array<{ label: string; value: string }>;
}

const modelValue = defineModel<string>();
const props = withDefaults(defineProps<TabsProps>(), {
  items: () => [],
});
</script>

<style scoped></style>
