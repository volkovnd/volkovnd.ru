import { default as upperFirst } from "lodash/upperFirst";
import { default as camelCase } from "lodash/camelCase";
import { default as kebabCase } from "lodash/kebabCase";

const pascalCase = function (str) {
  return upperFirst(camelCase(str));
};

export { upperFirst, camelCase, kebabCase, pascalCase };
