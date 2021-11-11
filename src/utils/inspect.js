const isUndefined = require("lodash/isUndefined");
const isNull = require("lodash/isNull");
const isBoolean = require("lodash/isBoolean");
const isString = require("lodash/isString");
const isNumber = require("lodash/isNumber");
const isInteger = require("lodash/isInteger");

const isNil = (input) => isNull(input) || isUndefined(input);

export { isUndefined, isNull, isNil, isBoolean, isString, isInteger, isNumber };
