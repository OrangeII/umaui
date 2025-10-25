<template>
  <button
    :class="[styles['uma-dialog-choice'], styles[props.color]]"
    @click="triggerDecoration"
  >
    <span :class="styles.overlay"></span>
    <span :class="styles.inner">
      <Cleat width="1.562rem" :class="styles.icon" />

      <span :class="styles.text">
        <slot>
          {{ props.label }}
        </slot>
      </span>

      <span :class="styles.decoration">
        <span :class="styles['decoration-front']">
          <span></span>
        </span>
        <span :class="styles['decoration-back']">
          <span></span>
        </span>
      </span>
    </span>

    <span>
      <ButtonClickDecoration v-model="showDecoration" :primary="true" />
    </span>
  </button>
</template>

<script setup lang="ts">
import styles from "./DialogChoice.module.scss";
import ButtonClickDecoration from "../ButtonClickDecoration/ButtonClickDecoration.vue";
import { useButtonClickDecoration } from "../ButtonClickDecoration/buttonClickDecoration";
import Cleat from "../Icons/Cleat.vue";

const { showDecoration, triggerDecoration } = useButtonClickDecoration();

interface DialogChoiceProps {
  color?: "green" | "yellow" | "pink";
  label?: string;
}
const props = withDefaults(defineProps<DialogChoiceProps>(), {
  color: "green",
  label: "",
});
</script>
