<template>
  <img
    :src="props.src"
    :alt="props.alt"
    :class="[styles.image, props.fade == 'none' ? styles.nofade : '']"
    :style="{ '--mask-angle': maskAngle }"
  />
</template>

<script setup lang="ts">
import styles from "./Image.module.scss";
import { computed } from "vue";

interface ImageProps {
  src: string;
  alt?: string;
  fade?: "none" | "top" | "bottom" | "left" | "right";
}
const props = withDefaults(defineProps<ImageProps>(), {
  alt: "",
  fade: "none",
});

const maskAngle = computed(() => {
  switch (props.fade) {
    case "right":
      return "90deg";
    case "left":
      return "270deg";
    case "bottom":
      return "180deg";
    case "top":
      return "0deg";
    default:
      return "90deg";
  }
});
</script>
