<script>
import { mergeData } from "vue-functional-data-merge";
import { toNumber } from "@/utils/number";

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
    const computedStyleRows = props.rows ? { "--bs-rows": toNumber(props.rows) } : null;
    const computedStyleColumns = props.columns ? { "--bs-columns": toNumber(props.columns) } : null;
    const computedStyleGap = props.gap ? { "--bs-gap": props.gap } : null;

    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "grid",
        style: [computedStyleRows, computedStyleColumns, computedStyleGap],
      }),
      children
    );
  },
};
</script>
