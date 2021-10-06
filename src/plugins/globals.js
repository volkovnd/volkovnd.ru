import Vue from "vue";
import { registerComponents } from "@/utils/plugins";
import { upperFirst, camelCase } from "@/utils/string";

const context = require.context("@/components", true, /v-[\w-]+\.(vue|js)$/);

const components = context
  .keys()
  .map((key) => ({
    key,
    name: upperFirst(camelCase(key.match(/^\..*\/([-a-z]+)\.[\w]+$/i)[1])),
  }))
  .reduce(
    (components, { key, name }) => ({
      [name]: context(key).default,

      ...components,
    }),
    {}
  );

registerComponents(Vue, components);
