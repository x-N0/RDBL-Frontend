<template>
  <div class="app">
    <Hamburger v-bind:drawer="this.drawer"></Hamburger>
    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Palm Beach</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="item in this.$router.options.routes"
          :key="item.id"
          :to="item.path"
          text
          >{{ item.name }}</v-btn
        >
      </v-toolbar-items>
      <div class="hidden-md-and-up">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item
              v-for="item in this.$router.options.routes"
              :key="item.id"
            >
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
  import Hamburger from "./Hamburger.vue";

  export default {
  name: "Toolbar",
  components: { Hamburger },
  data() {
    return {
      drawerRight: null,
      right: false,
      drawer: null
    };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main";
</style>
