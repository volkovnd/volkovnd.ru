<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  render: (h, { data, children }) => {
    return h(
      "section",
      mergeData(data, {
        staticClass: "section",
      }),
      children
    );
  },
};
</script>

<style lang="scss">
.section {
  margin-top: $spacer / 2;
  margin-bottom: $spacer / 2;
}
</style>
