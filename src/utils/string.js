const upperFirst = require("lodash/upperFirst");
const camelCase = require("lodash/camelCase");
const kebabCase = require("lodash/kebabCase");

const pascalCase = (str) => upperFirst(camelCase(str));

export { upperFirst, camelCase, kebabCase, pascalCase };
