<template>
  <v-app>
    <Toolbar />
    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>

    <v-footer app color="blue-grey" class="white--text">
      <span>Vuetify</span>
      <v-spacer></v-spacer>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Toolbar from "./components/Toolbar";

  export default {
  name: "App",
  components: {
    Toolbar
  },
  data: () => ({})
};
</script>
