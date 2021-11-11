/**
 * @param {import("vue").VueConstructor} VueConstructor
 * @param {string} name
 * @param {import("vue").ComponentOptions} options
 */
export const registerComponent = function (VueConstructor, name, options) {
  if (VueConstructor && name && options) {
    VueConstructor.component(name, options);
  }
};

/**
 *
 * @param {import("vue").VueConstructor} VueConstructor
 * @param {object} components
 */
export const registerComponents = function (VueConstructor, components = {}) {
  for (const component in components) {
    registerComponent(VueConstructor, component, components[component]);
  }
};
