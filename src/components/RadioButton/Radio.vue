<template>
  <label :class="styles.container">
    <input
      type="radio"
      name="radio"
      :value="value"
      :class="styles.input"
      v-model="model"
    />
    <span :class="styles.control"></span>
    <span :class="styles.labelText">
      <slot>{{ props.caption }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import styles from "./Radio.module.scss";

const model = defineModel();

interface RadioButtonProps {
  caption?: string;
  value?: any;
}

const props = withDefaults(defineProps<RadioButtonProps>(), {
  caption: "",
  value: null,
});
</script>
