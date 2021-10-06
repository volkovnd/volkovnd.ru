import Vue from "vue";
import Vuex from "vuex";

function loadModules() {
  const context = require.context("./modules", true, /^.*(?!index)\.js$/);

  const modules = context
    .keys()
    .map((key) => ({ key, name: key.match(/([a-z_]+)\.js$/i)[1] }))
    .reduce(
      (modules, { key, name }) => ({
        ...modules,
        [name]: context(key).default,
      }),
      {}
    );

  return { modules, context };
}

const { modules, context } = loadModules();

Vue.use(Vuex);

const store = new Vuex.Store({
  modules,

  strict: process.env.NODE_ENV !== "production",
});

if (module.hot) {
  module.hot.accept(context.id, () => {
    const { modules } = loadModules();

    store.hotUpdate({
      modules,
    });
  });
}

export default store;
