<template>
  <div class="app">
    <AppToolbarHamburger v-bind:drawer="this.drawer"></AppToolbarHamburger>
    <v-app-bar id="toolbar" class="transp pb-10" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title
        ><a href="/" style="text-decoration: none; color: #000000;"
          ><div id="toolbarIcon" style="max-width: 15rem;">
            <img
              src="..\assets\cofresilogo.png"
              alt="Cofresí Logo"
              width="50px"
            /><span style="padding-left: 1rem; font-size: 2rem;"
              >Palm Beach</span
            >
          </div></a
        ></v-toolbar-title
      >
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
    </v-app-bar>
    <AppAlert></AppAlert>
  </div>
</template>

<script>
import AppToolbarHamburger from "./AppToolbarHamburger.vue";

window.addEventListener("scroll", function() {
  let x = document.documentElement.scrollTop || document.body.scrollTop;
  const toolbar = document.getElementById("toolbar");
  if (x >= 75) {
    toolbar.classList.remove("transp");
  } else if (x === 0) {
    toolbar.classList.add("transp");
  }
});
export default {
  name: "AppToolbar",
  components: {
    AppToolbarHamburger,
    AppAlert: () => import("./AppAlert") //LAzyLoadComp.
  },
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
#toolbar {
  z-index: 105;
}
.transp {
  transition: all 0.4s ease-in-out;
  animation: slide-down 0.5s;
}
</style>
