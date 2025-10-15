<template>
  <label :class="styles.container">
    <input type="radio" name="radio" :value="value" :class="styles.input" />
    <span :class="styles.control"></span>
    <span :class="styles.labelText">
      <slot>{{ props.caption }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import styles from "./RadioButton.module.scss";

const value = defineModel();

interface RadioButtonProps {
  caption?: string;
}
const props = withDefaults(defineProps<RadioButtonProps>(), {
  caption: "",
});
</script>
