<template>
  <table :class="[styles.table, styles[props.orientation]]">
    <slot></slot>
  </table>
</template>

<script setup lang="ts">
import styles from "./Table.module.scss";

interface TableProps {
  orientation?: "vertical" | "horizontal";
}
const props = withDefaults(defineProps<TableProps>(), {
  orientation: "vertical",
});
</script>
