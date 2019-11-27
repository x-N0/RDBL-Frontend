<template>
  <div class="textEffect">
    <div class="visibleTxt">{{ visibletxt }}</div>
    <div id="revealDiv">
      <span class="revealTxt">{{ revealtxt }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextSliderEffect",
  props: ["visibletxt", "revealtxt"]
};
</script>

<style scoped lang="scss">
//VisibleTxt=Escape, RevealTxt=into amazing experiences
@import url("https://fonts.googleapis.com/css?family=Roboto:300");

.textEffect {
  body {
    text-align: center;
    background: linear-gradient(141deg, #ccc 25%, #eee 40%, #ddd 55%);
    color: #555;
    font-family: "Roboto";
    font-weight: 300;
    font-size: 32px;
    padding-top: 40vh;
    height: 100vh;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    -webkit-perspective: 1000;
    -webkit-transform: translate3d(-350px, 0, 0);
  }

  div {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
  }

  #revealDiv {
    width: 0;
    animation: reveal 7s infinite;
  }

  .revealTxt {
    margin-left: -600px;
    animation: slidein 7s infinite;
  }

  @keyframes showup {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes slidein {
    0% {
      margin-left: -800px;
    }
    100% {
      margin-left: -800px;
    }
    35% {
      margin-left: 0;
    }
    100% {
      margin-left: 0;
    }
  }

  @keyframes reveal {
    0% {
      opacity: 0;
      width: 0px;
    }
    20% {
      opacity: 1;
      width: 0px;
    }
    30% {
      width: 355px;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      width: 355px;
    }
  }
}
</style>
