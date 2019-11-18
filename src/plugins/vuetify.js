import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      light: {
        primary: "#00bcd4",
        secondary: "#8bc34a",
        accent: "#cddc39",
        error: "#ff5722",
        warning: "#f44336",
        info: "#607d8b",
        success: "#4caf50"
      }
    },
    options: {
      minifyTheme: function(css) {
        return process.env.NODE_ENV === "production"
          ? css.replace(/[\r\n|\r|\n]/g, "")
          : css;
      }
    }
  }
});
