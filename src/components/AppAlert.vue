<template>
  <v-col class="alerts">
    <v-alert
      v-for="alert in alerts"
      :key="alert.id"
      class="text-center"
      :type="alert.type"
      dismissible
      border="left"
      @click="closeAlert"
      >{{ alert.msg }}</v-alert
    >
  </v-col>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "AppError",
  computed: {
    ...mapState(["alerts"])
  },
  methods: {
    ...mapMutations(["setAlert"]),
    closeAlert() {
      this.setAlert({});
    }
  }
};
</script>

<style scoped lang="scss">
.alerts {
  position: fixed;
  z-index: 101;
}
</style>
