import config from "@/config";
import { camelCase, kebabCase } from "./string";

export const availableBreakpoints = Object.keys(config.breakpoints);

export const defaultBreakpoint = availableBreakpoints.find((breakpoint) => !config.breakpoints[breakpoint]);

export const breakpointPrefix = (breakpoint, prefix = "") =>
  `${prefix}${prefix !== "" && breakpoint === defaultBreakpoint ? "" : "-" + breakpoint}`;

export const propNamesWithBreakpoints = (name) =>
  availableBreakpoints.map((breakpoint) => ({
    propName: camelCase(breakpointPrefix(breakpoint, name)),
    breakpoint,
  }));

export const propsWithBreakpoints = (name, options) =>
  propNamesWithBreakpoints(name)
    .map(({ propName }) => propName)
    .reduce(
      (props, propName) => ({
        [propName]: options,

        ...props,
      }),
      {}
    );

export const classNamesWithBreakpoints = (name) =>
  availableBreakpoints.map((breakpoint) => ({
    className: kebabCase(breakpointPrefix(breakpoint, name)),
    breakpoint,
  }));
