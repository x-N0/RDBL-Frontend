<template>
  <div class="app">
    <v-app id="inspire">
      <Toolbar />
      <v-content>
        <v-container fluid>
          <router-view />
        </v-container>
      </v-content>
      <AppFooter></AppFooter>
    </v-app>
  </div>
</template>

<script>
import Toolbar from "./components/AppToolbar";
import AppFooter from "./components/AppFooter";

export default {
  name: "App",
  components: {
    Toolbar,
    AppFooter
  },
  data: () => ({}),
  propsTypes: {
    Str: { type: [String] },
    Int: { type: [Number] },
    StrReq: { type: [String], required: true },
    IntReq: { type: [Number], required: true }
  }
};
</script>
<style scoped lang="scss">
@import "assets/scss/main";
input[type="text"],
input[type="number"],
select,
textarea {
  font-size: $fontSize;
}
</style>
