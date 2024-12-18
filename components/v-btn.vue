<template>
  <button
    :type="type"
    class="btn"
    :class="`btn-${variant} btn-${size}`"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: HTMLButtonElement["type"];
    variant?: string | null;
    size?: string | null;
  }>(),
  {
    type: "button",
    variant: null,
    size: null
  }
);
</script>

<style lang="scss">
@import "bootstrap/scss/buttons";
</style>
