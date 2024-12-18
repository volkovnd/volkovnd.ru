<template>
  <div>
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (title) => (title ? `${title} | ` : "") + "Личный сайт Волкова Николая Дмитриевича"
});
</script>
