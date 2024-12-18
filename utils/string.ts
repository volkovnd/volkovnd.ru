import { camelCase } from "lodash-es";

/**
 * Upper first char
 *
 * @param {string} str The string to convert.
 * @return {string}
 * @example
 *
 * upperFirst('foo bar');
 * // => 'Foo bar'
 */
export const upperFirst = function (str: string) {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
};

/**
 * Converts `string` to [pascal case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @param {string} str The string to convert.
 * @returns {string}
 * @example
 *
 * pascalCase('Foo Bar');
 * // => 'FooBar'
 *
 * pascalCase('--foo-bar--');
 * // => 'FooBar'
 *
 * pascalCase('__FOO_BAR__');
 * // => 'FooBar'
 */
export const pascalCase = function (str: string) {
  return upperFirst(camelCase(str));
};
