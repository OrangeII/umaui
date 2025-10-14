<template>
  <span :class="[styles.rank, styles[props.rank]]" :data-text="props.rank">{{
    props.rank
  }}</span>
</template>

<script setup lang="ts">
import styles from "./Rank.module.scss";

interface RankProps {
  rank: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "S" | "SS";
}

const props = withDefaults(defineProps<RankProps>(), {
  rank: "C",
});
</script>
