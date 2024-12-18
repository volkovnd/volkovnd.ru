import type { Breakpoint } from "~/constants/breakpoints";
import { BREAKPOINTS } from "~/constants";
import { camelCase, kebabCase } from "lodash-es";

export const availableBreakpoints = Object.keys(BREAKPOINTS) as Breakpoint[];

export const defaultBreakpoint = availableBreakpoints.find((breakpoint) => !BREAKPOINTS[breakpoint]);

export const breakpointPrefix = (breakpoint: Breakpoint, prefix = "") =>
  `${prefix}${prefix !== "" && breakpoint === defaultBreakpoint ? "" : "-" + breakpoint}`;

export const propNamesWithBreakpoints = (name: string) =>
  availableBreakpoints.map((breakpoint) => ({
    propName: camelCase(breakpointPrefix(breakpoint, name)),
    breakpoint
  }));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const propsWithBreakpoints = (name: string, options: any) =>
  propNamesWithBreakpoints(name)
    .map(({ propName }) => propName)
    .reduce(
      (props, propName) => ({
        [propName]: options,

        ...props
      }),
      {}
    );

export const classNamesWithBreakpoints = (name: string) =>
  availableBreakpoints.map((breakpoint) => ({
    className: kebabCase(breakpointPrefix(breakpoint, name)),
    breakpoint
  }));
