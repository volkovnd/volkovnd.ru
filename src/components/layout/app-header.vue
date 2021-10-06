<template>
  <header id="header">
    <slot />
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss">
#header {
  padding-top: $spacer;
  padding-bottom: $spacer;
}
</style>
