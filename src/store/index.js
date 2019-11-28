import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== `production`,
  state: {
    alerts: []
  },
  mutations: {
    setAlert(state, payload) {
      payload.id = state.alerts.index + 1;
      state.alerts.push(payload);
    }
  },
  actions: {}
});
