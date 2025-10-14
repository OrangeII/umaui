<template>
  <component :is="selectedComponent" :width="size" :height="size" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import RankA from "./RankA.vue";
import RankB from "./RankB.vue";
import RankC from "./RankC.vue";
import RankD from "./RankD.vue";
import RankE from "./RankE.vue";
import RankF from "./RankF.vue";
import RankG from "./RankG.vue";
import RankS from "./RankS.vue";
import RankSS from "./RankSS.vue";

interface RankProps {
  rank: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "S" | "SS";
  size?: number;
}

const props = withDefaults(defineProps<RankProps>(), {
  rank: "C",
  size: 18,
});

const rankComponentMap = {
  A: RankA,
  B: RankB,
  C: RankC,
  D: RankD,
  E: RankE,
  F: RankF,
  G: RankG,
  S: RankS,
  SS: RankSS,
} as const;

const selectedComponent = computed(() => rankComponentMap[props.rank] ?? RankC);
</script>
