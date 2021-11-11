<script>
import { mergeData } from "vue-functional-data-merge";

export default {
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    columns: {
      type: [String, Number],
      default: null,
    },
    rows: {
      type: [String, Number],
      default: null,
    },
    gap: {
      type: String,
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "grid",
        style: ["rows", "columns", "gap"].map((key) =>
          props[key]
            ? {
                [`--bs-${key}`]: props[key],
              }
            : null
        ),
      }),
      children
    );
  },
};
</script>
