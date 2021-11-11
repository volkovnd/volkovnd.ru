<script>
import { mergeData } from "vue-functional-data-merge";
import { kebabCase } from "@/utils/string";
import { propsWithBreakpoints } from "@/utils/breakpoints";

const colsProps = propsWithBreakpoints("rowCols", {
  type: [Number, String],
  default: null,
});

export default {
  functional: true,
  props: {
    tagName: {
      type: String,
      default: "div",
    },
    justifyContent: {
      type: String,
      default: null,
    },
    alignItems: {
      type: String,
      default: null,
    },
    noGutters: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Boolean,
      default: false,
    },
    gap: {
      type: [Number, String],
      default: null,
    },
    gapX: {
      type: [Number, String],
      default: null,
    },
    gapY: {
      type: [Number, String],
      default: null,
    },
    ...colsProps,
  },
  render: (h, { data, props, children }) => {
    const computedJustifyContentClass = props.justifyContent ? [`justify-content-${props.justifyContent}`] : null;
    const computedAlignItemsClass = props.alignItems ? [`align-items-${props.alignItems}`] : null;
    // const computedColsClass = props.cols ? [`row-cols-${props.cols}`] : null;
    const computedGapClass = [
      props.gap ? { [`g-${props.gap}`]: true } : null,
      props.gapX ? { [`gx-${props.gapX}`]: true } : null,
      props.gapY ? { [`gy-${props.gapY}`]: true } : null,
    ];

    const computedColsClass = Object.keys(colsProps).map((propName) =>
      !!props[propName] || props[propName] === ""
        ? [kebabCase(`${propName}${props[propName] ? "-" + props[propName] : ""}`)]
        : null
    );

    return h(
      props.tagName,
      mergeData(data, {
        staticClass: "row",
        class: [
          {
            "no-gutters": props.noGutters,
            "flex-column": props.column,
          },
          computedJustifyContentClass,
          computedAlignItemsClass,
          computedColsClass,
          computedGapClass,
        ],
      }),
      children
    );
  },
};
</script>
