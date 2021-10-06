<template>
  <div id="app">
    <div class="container">
      <div class="d-grid">
        <div class="col-12">
          <div class="text-center">
            <h1>Волков Николай</h1>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-center mb-3">
          <div class="text-center">
            <a href="https://github.com/volkovnd" target="_blank">ГитХаб</a>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-center mb-3">
          <div class="text-center">
            <a href="mailto:volkovnd@yandex.ru">volkovnd@yandex.ru</a>
          </div>
        </div>

        <div class="d-flex flex-wrap justify-content-center">
          <ul class="list-inline">
            <li v-for="link in links" :key="link.id" class="list-inline-item">
              <a :href="link.href" target="_blank">{{ link.label }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      links: [
        {
          id: "vk",
          label: "ВКонтакте",
          href: "https://vk.com/volkovnd",
        },
        {
          id: "twitter",
          label: "Твиттер",
          href: "https://twitter.com/volkovnd1990",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
// Layout & components
@import "~bootstrap/scss/root";
@import "~bootstrap/scss/reboot";
@import "~bootstrap/scss/type";
@import "~bootstrap/scss/images";
@import "~bootstrap/scss/containers";
@import "~bootstrap/scss/grid";
@import "~bootstrap/scss/tables";
@import "~bootstrap/scss/forms";
@import "~bootstrap/scss/buttons";
@import "~bootstrap/scss/transitions";
@import "~bootstrap/scss/dropdown";
@import "~bootstrap/scss/button-group";
@import "~bootstrap/scss/nav";
@import "~bootstrap/scss/navbar";
@import "~bootstrap/scss/card";
@import "~bootstrap/scss/accordion";
@import "~bootstrap/scss/breadcrumb";
@import "~bootstrap/scss/pagination";
@import "~bootstrap/scss/badge";
@import "~bootstrap/scss/alert";
@import "~bootstrap/scss/progress";
@import "~bootstrap/scss/list-group";
@import "~bootstrap/scss/close";
@import "~bootstrap/scss/toasts";
@import "~bootstrap/scss/modal";
@import "~bootstrap/scss/tooltip";
@import "~bootstrap/scss/popover";
@import "~bootstrap/scss/carousel";
@import "~bootstrap/scss/spinners";
@import "~bootstrap/scss/offcanvas";
@import "~bootstrap/scss/placeholders";

// Helpers
@import "~bootstrap/scss/helpers";

// Utilities
@import "~bootstrap/scss/utilities/api";
// scss-docs-end import-stack
</style>
