<template>
  <div id="app">
    <app-header>
      <b-container>
        <h3>Header</h3>
      </b-container>
    </app-header>

    <b-navbar id="navigation" toggleable="md" type="dark" variant="dark">
      <b-container>
        <b-navbar-toggle target="navigation-collapse"></b-navbar-toggle>

        <b-collapse id="navigation-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view></router-view>
    </b-container>

    <app-footer type="dark" variant="light">
      <b-container>
        <b>Footer</b>
      </b-container>
    </app-footer>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/app-header.vue";
import AppFooter from "@/components/layout/app-footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
}
</style>
