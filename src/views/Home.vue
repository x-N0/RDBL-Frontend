<template>
  <div class="home">
    <div class="header__background">
      <ImgThreeCols id="header__images" :header="headerImages"></ImgThreeCols>
    </div>
    <AppBucketsWrapper />
  </div>
</template>

<script>
  // @ is an alias to /src
  import ImgThreeCols from "../components/ImgThreeCols";
  import AppBucketsWrapper from "../components/Wrappers-Containers/AppBucketsWrapper";

  export default {
  name: "home",
  components: {
    ImgThreeCols,
    AppBucketsWrapper
  },
  data() {
    return {
      headerImages: [
        "https://miro.medium.com/max/1054/1*N1nE0iZyJC18IYry84JpUA.jpeg",
        "https://miro.medium.com/max/750/1*6Bo59rHEAItrWu_hBlR62g.jpeg",
        "https://miro.medium.com/max/1200/1*lMBgLWpD7rvGIti9wgr6Ow.jpeg",
        "https://miro.medium.com/max/1200/1*J6wSe8E5E_6LpOkkKwN-Fw.jpeg",
        "https://miro.medium.com/max/1200/1*t6aR5GKYBZfoRGJZoPkR9w.jpeg",
        "https://miro.medium.com/max/675/1*tQSvoI3FbfZ4flSFBobcvQ.jpeg"
        //"https://miro.medium.com/max/744/1*kgpb_NLdo_LNyPWQ3SAKJQ.jpeg"
      ],

    };
  }
};
</script>
<style scoped lang="scss">
@import "../assets/scss/main";
.header__background {
  width: 100vw;
  height: 100vh;
}
#header__images {
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>
