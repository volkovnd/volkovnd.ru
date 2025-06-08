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

<style lang="scss" scoped>
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  color: #fff;
  cursor: pointer;
  background-color: #15459e;
  border: 1px solid #15459e;
  border-radius: 0.25rem;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: #133575;
  }
}
</style>
