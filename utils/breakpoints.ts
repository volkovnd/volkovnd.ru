import type { Breakpoint } from "~/constants/breakpoints";
import { BREAKPOINTS } from "~/constants";
import { camelCase } from "lodash-es";

export const availableBreakpoints = Object.keys(BREAKPOINTS) as Breakpoint[];

export const defaultBreakpoint = availableBreakpoints.find((breakpoint) => !BREAKPOINTS[breakpoint]);

export const breakpointPrefix = (breakpoint: Breakpoint, prefix = "") =>
  `${prefix}${prefix !== "" && breakpoint === defaultBreakpoint ? "" : "-" + breakpoint}`;

export const propNamesWithBreakpoints = (name: string) =>
  availableBreakpoints.map((breakpoint) => camelCase(breakpointPrefix(breakpoint, name)));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const propsWithBreakpoiints = (name: string, options: any) =>
  Object.fromEntries(propNamesWithBreakpoints(name).map((propName) => [propName, options]));
