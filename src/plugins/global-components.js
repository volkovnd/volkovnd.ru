import { pluginFactory } from "@/utils/plugins";
import { registerComponents } from "@/utils/components";

const context = require.context("@/components", true, /\.(vue|js)$/);

const components = context
  .keys()
  .map((key) => ({
    key,
    name: key.replace(/^\..*\//, "").replace(/\.(vue|js)$/, ""),
  }))
  .reduce(
    (components, { key, name }) => ({
      [name]: context(key).default,

      ...components,
    }),
    {}
  );

export default pluginFactory((VueConstructor) => {
  registerComponents(VueConstructor, components);
});
