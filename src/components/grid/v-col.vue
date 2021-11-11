<script>
import { mergeData } from "vue-functional-data-merge";
import { kebabCase } from "@/utils/string";
import { propsWithBreakpoints } from "@/utils/breakpoints";

const colProps = propsWithBreakpoints("col", {
  type: [Number, String, Boolean],
  default: null,
});

export default {
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },

    ...colProps,
  },
  render: (h, { data, props, children }) => {
    const computedColClasses = Object.keys(colProps).map((propName) =>
      !!props[propName] || props[propName] === ""
        ? [kebabCase(`${propName}${props[propName] ? "-" + props[propName] : ""}`)]
        : null
    );

    return h(
      props.tagName,

      mergeData(data, {
        class: [computedColClasses],
      }),
      children
    );
  },
};
</script>
