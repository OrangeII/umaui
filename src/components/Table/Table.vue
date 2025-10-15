<template>
  <table
    :class="[
      props.dashed ? styles.dashed : null,
      styles.table,
      styles[props.orientation],
    ]"
  >
    <slot></slot>
  </table>
</template>

<script setup lang="ts">
import styles from "./Table.module.scss";

interface TableProps {
  orientation?: "vertical" | "horizontal";
  dashed?: boolean;
}
const props = withDefaults(defineProps<TableProps>(), {
  orientation: "vertical",
  dashed: false,
});
</script>
