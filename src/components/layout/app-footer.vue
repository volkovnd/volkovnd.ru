<template>
  <footer
    id="footer"
    :class="{
      [`bg-${type}`]: !!type,
      [`text-${variant}`]: !!variant,
    }"
  >
    <slot />
  </footer>
</template>

<script>
import { PROP_TYPE_STRING } from "@/constants/props";
import { makeProp } from "@/utils/props";

export default {
  name: "AppFooter",
  props: {
    type: makeProp(PROP_TYPE_STRING, null),
    variant: makeProp(PROP_TYPE_STRING, null),
  },
};
</script>

<style lang="scss">
#footer {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: auto;
}
</style>
