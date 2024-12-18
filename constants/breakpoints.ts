export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
} as const;

export const DEFAULT_BREAKPOINT: Breakpoint = "xs" as const;
