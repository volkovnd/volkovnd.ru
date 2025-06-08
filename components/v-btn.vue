<template>
  <button
    :type="type"
    class="btn"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
withDefaults(
  defineProps<{
    type?: HTMLButtonElement["type"];
  }>(),
  {
    type: "button"
  }
);
</script>

<style lang="scss">
@use "sass:color";

.btn {
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  background-color: $primary;
  border: none;
  border-radius: 0.375rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: color.adjust($primary, $lightness: -10%);
  }
}
</style>
