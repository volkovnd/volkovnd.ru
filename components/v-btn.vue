<template>
  <button
    :type="type"
    class="btn"
    :class="{
      [`btn-${variant}`]: !!variant,
      [`btn-${size}`]: !!size
    }"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: HTMLButtonElement["type"];
    variant?: string;
    size?: string;
  }>(),
  {
    type: "button",
    variant: undefined,
    size: undefined
  }
);
</script>

<style lang="scss">
@import "bootstrap/scss/buttons";
</style>
