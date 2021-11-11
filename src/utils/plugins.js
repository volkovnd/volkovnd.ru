/**
 * @param {import("vue").VueConstructor} VueConstructor
 * @param {any} plugin
 * @param {object} config
 */
export const registerPlugin = function (VueConstructor, plugin, options = {}) {
  if (VueConstructor && plugin) {
    VueConstructor.use(plugin, options);
  }
};

/**
 * @param {import("vue").VueConstructor} VueConstructor
 * @param {object} plugins
 * @param {object} config
 */
export const registerPlugins = function (VueConstructor, plugins = {}, config = {}) {
  for (const plugin in plugins) {
    registerPlugin(VueConstructor, plugins[plugin], config);
  }
};

export const installFactory = function (fn) {
  const install = function (VueConstructor, options = {}) {
    if (install.installed) return;

    fn(VueConstructor, options);

    install.installed = true;
  };

  install.installed = false;

  return install;
};

export const pluginFactory = (fn, extend = {}) => ({
  install: installFactory(fn),

  ...extend,
});
