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
            <a href="mailto:volkovnd@yandex.ru">Написать эл. письмо</a>
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
        // {
        //   id: "vk",
        //   label: "ВКонтакте",
        //   href: "https://vk.com/volkovnd",
        // },
        {
          id: "github",
          label: "GitHub",
          href: "https://github.com/volkovnd",
        },
        {
          id: "twitter",
          label: "Твиттер",
          href: "https://twitter.com/volkovnd1990",
        },
        {
          id: "telegram",
          label: "Telegram",
          href: "https://t.me/volkovnd",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~@/scss/index";
</style>
