<template>
  <span class="tag">
    <slot />
  </span>
</template>

<style lang="scss">
.tag {
  display: inline-block;
  padding: 0.5rem 1rem;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  background-color: $primary;
  border: none;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: $active;
  }
}
</style>
