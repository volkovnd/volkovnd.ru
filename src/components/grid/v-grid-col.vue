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
    col: {
      type: [Number, String],
      default: null,
    },
    start: {
      type: [Number, String],
      default: null,
    },
    row: {
      type: [Number, String],
      default: null,
    },
    column: {
      type: [Number, String],
      default: null,
    },
  },
  render: (h, { data, props, children }) => {
    const computedGridColClass = props.col ? [`g-col-${toNumber(props.col)}`] : null;
    const computedGridStartClass = props.start ? [`g-start-${toNumber(props.start)}`] : null;
    const computedColumnStyle = props.column ? { gridColumn: toNumber(props.column) } : null;
    const computedRowStyle = props.row ? { gridRow: toNumber(props.row) } : null;

    return h(
      props.tagName,
      mergeData(data, {
        class: [computedGridColClass, computedGridStartClass],
        style: [computedColumnStyle, computedRowStyle],
      }),
      children
    );
  },
};
</script>
