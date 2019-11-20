<template>
  <div class="about">
    <h1>TESTING AREA:</h1>
    <v-spacer></v-spacer>
    <ImgSlider></ImgSlider>
  </div>
</template>

<script>
  import ImgSlider from "../components/ImgSlider";

  export default {
  name: "about",
  components: {
    ImgSlider
  }
};
</script>
