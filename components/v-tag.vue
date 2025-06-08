<template>
  <span class="tag">
    <slot />
  </span>
</template>

<style lang="scss">
@use "sass:color";

.tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  background-color: $primary;
  border: none;
  border-radius: 0.375rem;
  transition: all 0.25s ease-in-out;

  &:hover {
    background-color: color.adjust($primary, $lightness: -10%);
  }
}
</style>
