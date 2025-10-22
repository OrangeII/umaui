<template>
  <div :class="styles.heading">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import styles from "./Heading.module.scss";

interface HeadingProps {}
withDefaults(defineProps<HeadingProps>(), {});
</script>
