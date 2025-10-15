<template>
  <svg
    :class="styles.plus"
    viewBox="0 0 9 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.4375 0.5L5.53809 0.509766C5.76598 0.556349 5.9375 0.758339 5.9375 1V3.13184H8C8.27614 3.13184 8.5 3.35569 8.5 3.63184V5.36816C8.5 5.64431 8.27614 5.86816 8 5.86816H5.9375V8C5.9375 8.27609 5.71357 8.49992 5.4375 8.5H3.5459C3.26976 8.5 3.0459 8.27614 3.0459 8V5.86816H1C0.723858 5.86816 0.5 5.64431 0.5 5.36816V3.63184L0.509766 3.53027C0.55651 3.30259 0.758487 3.13184 1 3.13184H3.0459V1C3.0459 0.723858 3.26976 0.5 3.5459 0.5H5.4375Z"
      fill="url(#paint0_linear_35_31)"
      stroke="url(#paint1_linear_35_31)"
      stroke-linejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_35_31"
        x1="4.71207"
        y1="0.527027"
        x2="4.71207"
        y2="13.068"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--fill-start)" />
        <stop offset="1" stop-color="var(--fill-end)" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_35_31"
        x1="4.71207"
        y1="-0.28092"
        x2="4.71207"
        y2="14.5012"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--stroke-start)" />
        <stop offset="1" stop-color="var(--stroke-end)" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import styles from "./Rank.module.scss";
</script>
