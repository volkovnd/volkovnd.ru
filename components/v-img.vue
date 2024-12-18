<template>
  <component
    :is="tagName"
    :alt="alt"
    :class="{ 'img-fluid': fluid, 'img-thumbnail': thumbnail }"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tagName?: string;
    alt?: string;
    thumbnail?: boolean;
    fluid?: boolean;
  }>(),
  {
    tagName: "img",
    alt: "",
    thumbnail: false,
    fluid: false
  }
);
</script>

<style lang="scss">
@import "bootstrap/scss/images";
</style>
