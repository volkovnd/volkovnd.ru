<template>
  <div>
    <nuxt-page />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

useHead({
  titleTemplate: config.public.title
});
</script>
