<template>
  <component
    :is="tagName"
    class="row"
    :class="{
      'no-gutters': noGutters,
      'flex-column': column,
      [`row-cols-${rowCols}`]: rowCols,
      [`row-cols-sm-${rowColsSm}`]: rowColsSm,
      [`row-cols-md-${rowColsMd}`]: rowColsMd,
      [`row-cols-lg-${rowColsLg}`]: rowColsLg,
      [`row-cols-xl-${rowColsXl}`]: rowColsXl,
      [`row-cols-xl-${rowColsXxl}`]: rowColsXxl,
      [`g-${gap}`]: gap,
      [`gx-${gapX}`]: gapX,
      [`gy-${gapY}`]: gapY,
      [`justify-content-${justifyContent}`]: justifyContent,
      [`align-items-${alignItems}`]: alignItems
    }"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    tagName?: string;
    justifyContent?: string;
    alignItems?: string;
    noGutters?: boolean;
    column?: boolean;
    gap?: number;
    gapX?: number;
    gapY?: number;
    rowCols?: number | string;
    rowColsSm?: number | string;
    rowColsMd?: number | string;
    rowColsLg?: number | string;
    rowColsXl?: number | string;
    rowColsXxl?: number | string;
  }>(),
  {
    tagName: "div",
    justifyContent: undefined,
    alignItems: undefined,
    noGutters: false,
    column: false,
    gap: undefined,
    gapX: undefined,
    gapY: undefined,
    rowCols: undefined,
    rowColsSm: undefined,
    rowColsMd: undefined,
    rowColsLg: undefined,
    rowColsXl: undefined,
    rowColsXxl: undefined
  }
);
</script>
