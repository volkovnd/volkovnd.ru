<template>
  <component
    :is="tagName"
    class="grid"
    :style="{
      '--bs-columns': columns,
      '--bs-rows': rows,
      '--bs-gap': gap
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tagName?: string;
    columns?: number | string;
    rows?: number | string;
    gap?: number | string;
  }>(),
  {
    tagName: "div",
    columns: null,
    rows: null,
    gap: null
  }
);
</script>
