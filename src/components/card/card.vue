<template>
  <div :class="styles.card">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import styles from "./card.module.scss";
</script>
