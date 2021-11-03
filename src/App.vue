<template>
  <div id="app">
    <div class="container">
      <grid-row class="align-items-center mb-4 pb-4 border-bottom">
        <div slot="left">
          <h1>Николай Волков</h1>
        </div>
        <div slot="right">
          <img src="~@/assets/avatar-small.jpg" class="rounded-circle" alt="" style="width: 150px" />
        </div>
      </grid-row>

      <contacts-item title="E-Mail" link="mailto:volkovnd@yandex.ru" link-text="volkovnd@yandex.ru" />
      <contacts-item title="Telegram" link="https://t.me/volkovnd" />
      <contacts-item title="GitHub" link="https://github.com/volkovnd" />
    </div>
  </div>
</template>

<script>
import GridRow from "@/components/grid-row.vue";
import ContactsItem from "@/components/contacts-item.vue";

export default {
  name: "App",
  components: {
    GridRow,

    ContactsItem,
  },
};
</script>

<style lang="scss">
@import "~@/scss/index";

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
}
</style>
