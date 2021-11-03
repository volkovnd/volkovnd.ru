<template>
  <grid-row class="py-3">
    <b slot="left">{{ title }}:</b>
    <a slot="right" :href="link" :target="linkTarget">{{ linkText ? linkText : link }}</a>
  </grid-row>
</template>

<script>
import GridRow from "@/components/grid-row.vue";

export default {
  components: {
    GridRow,
  },

  props: {
    title: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    linkText: {
      type: String,
      default: null,
    },
  },

  computed: {
    linkTarget() {
      if (/^https?:\/\//.test(this.link)) return "_blank";

      return null;
    },
  },
};
</script>
