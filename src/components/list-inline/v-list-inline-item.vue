<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "li",
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "list-inline-item",
      }),
      children
    );
  },
};
</script>
