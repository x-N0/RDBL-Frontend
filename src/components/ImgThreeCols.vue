<template>
  <v-row class="col-12 ThreeCols">
    <div class="Img__centertext">
      <span>
        The next Flight, the new Dream.
      </span>
    </div>
    <v-col class="column" v-for="(image, k) in header" :key="k">
      <div class="crop">
        <v-img
          class="img"
          :id="'id' + k.toString()"
          :src="image"
          alt="Caribbean Paradise Image"
          eager
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
    import TextSliderEffect from "./TextSliderEffect";

    export default {
  name: "ImgThreeCols",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    TextSliderEffect
  },
  props: ["header"],
  data() {
    return {
      landscapes: [
        "https://www.goodfreephotos.com/albums/dominican-republic/other/coastline-landscape-in-the-dominican-republic.jpg",
        "http://www.thelifenomadik.com/wp-content/uploads/2014/04/DSC_4631.jpg",

        "https://www.telegraph.co.uk/content/dam/travel/Spark/dominican-republic/salto-el-limon.jpg",
        "https://prontievia.files.wordpress.com/2011/05/dsc031691.jpg",
        "https://extremehotels.com/wp-content/uploads/2018/11/isla-cabritos.jpg",
        "https://cdn.pixabay.com/photo/2017/05/01/16/24/dominican-republic-2275899_960_720.jpg"
        //"http://www.thelifenomadik.com/wp-content/uploads/2014/04/DSC_4631.jpg",
        //"https://prontievia.files.wordpress.com/2011/05/dsc031691.jpg"
      ]
    };
  }
};

/*      <TextSliderEffect
        class="image_Txt"
        visibletxt="Escape"
        revealtxt="into AMAZING experiences"
></TextSliderEffect>*/
</script>
<style scoped lang="scss">
//AS A COLLAGE
.ThreeCols {
  box-sizing: border-box;
  margin-top: -10.5vh;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 120%;

  .image__Txt {
    place-self: center;
  }
  .column {
    flex: 25%;
    max-width: calc(100% / 3);
    padding: 0;
  }

  .column .img {
    margin-top: 0;
    vertical-align: middle;
    height: 50vh;
  }
  #id1 {
    height: 40vh;
  }
  #id4 {
    margin-top: -10vh;
    height: 60vh;
  }
  .Img__centertext {
    justify-self: flex-start;
    z-index: 101;
    text-align: right;

    position: absolute;
    max-width: 600px;
  }
}

/* Create four equal columns that sits next to each other */
</style>
