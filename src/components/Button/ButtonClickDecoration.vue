<template>
  <svg
    :class="styles['content']"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 52"
    fill="none"
  >
    <path
      d="M-2.09432 47.3526L2.72422 33.2677C3.12815 32.087 4.50284 31.5604 5.59219 32.1692L30.7968 46.2541C32.596 47.2596 31.8823 50 29.8212 50H-0.201991C-1.57374 50 -2.53834 48.6505 -2.09432 47.3526Z"
      fill="url(#deco-1)"
    />
    <path
      d="M17.1631 11.4049L7.2572 21.6777C6.36059 22.6075 6.56738 24.1307 7.67943 24.7878L31.8938 39.0964C33.668 40.1447 35.6765 38.1493 34.6398 36.3684L20.3313 11.7871C19.6636 10.64 18.0844 10.4496 17.1631 11.4049Z"
      fill="url(#deco-2)"
    />
    <path
      d="M40.1273 31.86L28.6067 9.17873C28.0345 8.05229 28.6372 6.68411 29.8545 6.34596L42.8153 2.74576C44.1338 2.37951 45.4224 3.41584 45.3475 4.78222L43.9075 31.0637C43.7956 33.1057 41.0534 33.6833 40.1273 31.86Z"
      fill="url(#deco-3)"
    />
    <path
      d="M1.77832 32.9443C2.3842 31.1733 4.44607 30.3828 6.08008 31.2959L31.2842 45.3809C33.983 46.889 32.9128 50.9999 29.8213 51H-0.202148C-2.25962 50.9999 -3.70589 48.976 -3.04004 47.0293L1.77832 32.9443ZM16.4434 10.7109C17.8252 9.27787 20.1938 9.56363 21.1953 11.2842L35.5039 35.8652C37.0589 38.5367 34.0459 41.5296 31.3848 39.957L7.1709 25.6484C5.50283 24.6628 5.19223 22.3781 6.53711 20.9834L16.4434 10.7109ZM42.5479 1.78223C44.5255 1.23303 46.458 2.78742 46.3457 4.83691L44.9062 31.1182C44.7384 34.1811 40.6245 35.0474 39.2354 32.3125L27.7148 9.63184C26.8566 7.94219 27.761 5.89007 29.5869 5.38281L42.5479 1.78223Z"
      stroke="var(--click-decoration-stroke-color)"
      stroke-opacity="var(--click-decoration-stroke-opacity)"
      stroke-width="2"
    />
    <defs>
      <linearGradient
        id="deco-1"
        x1="13"
        y1="18"
        x2="32"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--click-decoration-primary)" />
        <stop offset="1" stop-color="var(--click-decoration-secondary)" />
      </linearGradient>
      <linearGradient
        id="deco-2"
        x1="13"
        y1="18"
        x2="32"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--click-decoration-primary)" />
        <stop offset="1" stop-color="var(--click-decoration-secondary)" />
      </linearGradient>
      <linearGradient
        id="deco-3"
        x1="13"
        y1="18"
        x2="32"
        y2="36"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="var(--click-decoration-primary)" />
        <stop offset="1" stop-color="var(--click-decoration-secondary)" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts">
import styles from "./Button.module.scss";
</script>
