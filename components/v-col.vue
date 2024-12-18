<template>
  <component
    :is="tagName"
    :class="{
      col: !col,
      [`col-${col}`]: col,
      [`col-sm-${colSm}`]: colSm,
      [`col-md-${colMd}`]: colMd,
      [`col-lg-${colLg}`]: colLg,
      [`col-xl-${colXl}`]: colXl,
      [`col-xxl-${colXxl}`]: colXxl
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tagName?: string;
    col?: string | number | boolean;
    colXs?: string | number | boolean;
    colSm?: string | number | boolean;
    colMd?: string | number | boolean;
    colLg?: string | number | boolean;
    colXl?: string | number | boolean;
    colXxl?: string | number | boolean;
  }>(),
  {
    tagName: "div",
    col: false,
    colXs: false,
    colSm: false,
    colMd: false,
    colLg: false,
    colXl: false,
    colXxl: false
  }
);
</script>
