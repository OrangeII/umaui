<template>
  <input :type="props.type" :class="styles.input" v-model="value" />
</template>

<script setup lang="ts">
import styles from "./Input.module.scss";

const value = defineModel();

interface InputProps {
  type?:
    | "date"
    | "datetime-local"
    | "email"
    | "number"
    | "password"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url";
}
const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
});
</script>
