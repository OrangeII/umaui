<template>
  <button
    :class="[
      styles.button,
      props.primary ? styles.primary : null,
      props.medium ? styles.medium : null,
      props.small ? styles.small : null,
    ]"
    @click="onClick"
    :disabled="props.disabled"
  >
    <span :class="styles.content">
      <span v-if="$slots.icon" :class="styles.icon">
        <slot name="icon"></slot>
      </span>
      <span>
        <slot>
          <!-- Default label if none is provided -->
          {{ props.label }}
        </slot>
      </span>
    </span>
    <span :class="styles.decoration">
      <span :class="styles['decoration-front']"></span>
      <span :class="styles['decoration-back']"></span>
    </span>
    <span :class="styles['inner-border']"></span>

    <span v-if="!props.suppressClickDecoration">
      <ButtonClickDecoration
        v-model="showDecoration"
        :primary="props.primary"
      />
    </span>
  </button>
</template>

<script setup lang="ts">
import styles from "./Button.module.scss";
import ButtonClickDecoration from "../ButtonClickDecoration/ButtonClickDecoration.vue";
import { useButtonClickDecoration } from "../ButtonClickDecoration/useButtonClickDecoration";

const { showDecoration, triggerDecoration } = useButtonClickDecoration();

interface ButtonProps {
  primary?: boolean;
  small?: boolean;
  medium?: boolean;
  label?: string;
  suppressClickDecoration?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<ButtonProps>(), {
  primary: false,
  small: false,
  label: "",
  suppressClickDecoration: false,
});

function onClick() {
  if (!props.suppressClickDecoration) {
    triggerDecoration();
  }
}
</script>
