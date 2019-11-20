<template>
  <div class="ham">
    <v-navigation-drawer v-model="drawer" fixed temporary app>
      <v-list dense>
        <v-list-item
          @click.stop="left = !left"
          v-for="(item, i) in this.$router.options.routes"
          :key="i"
          :to="item.path"
        >
          <v-list-item-action>
            <v-icon>{{ item.name }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
  props: {
    drawer: null
  },
  data() {
    return {
      left: false
    };
  }
};
</script>

<style scoped></style>
