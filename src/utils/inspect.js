const isString = require("lodash/isString");
const isNumber = require("lodash/isNumber");
const isInteger = require("lodash/isInteger");

export function isUndefined(value) {
  return value === undefined;
}

export function isNull(value) {
  return value === null;
}

export function isNil(input) {
  return isNull(input) || isUndefined(input);
}

export function isBoolean(value) {
  return value === true || value === false;
}

export function isArray(value) {
  return Array.isArray(value);
}

export { isString, isInteger, isNumber };
