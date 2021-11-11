const upperFirst = require("lodash/upperFirst");
const camelCase = require("lodash/camelCase");
const kebabCase = require("lodash/kebabCase");

/**
 *
 * @param {string} str
 * @returns {string}
 *
 * @example
 * pascalCase("foo bar")
 * // => 'FooBar'
 */
const pascalCase = (str) => upperFirst(camelCase(str));

export { upperFirst, camelCase, kebabCase, pascalCase };
