<template>
  <component
    :is="tagName"
    :class="{
      container: !fluid,
      'container-fluid': fluid
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tagName?: string;
    fluid?: boolean;
  }>(),
  {
    tagName: "div",
    fluid: false
  }
);
</script>

<style lang="scss">
@import "bootstrap/scss/containers";
</style>
