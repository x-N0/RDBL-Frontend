<template>
  <v-lazy
    :options="{
      threshold: 1
    }"
    min-height="200"
    transition="fade-transition"
  >
    <v-row no-gutters dense>
      <BucketCard
        class="BucketCard"
        v-for="Bucket in bucketLists"
        :key="Bucket.id"
        :Bucket="Bucket"
      ></BucketCard>
    </v-row>
  </v-lazy>
</template>

<script>
import BucketCard from "../BucketCard";
//import _ from "lodash.throttle";
import { HTTP } from "../../http-common.js";

export default {
  name: "AppBucketsWrapper",
  components: { BucketCard },
  data() {
    return {
      bucketLists: [
        {
          name: "Bucket1",
          PhotoPath:
            "https://miro.medium.com/max/1200/1*t6aR5GKYBZfoRGJZoPkR9w.jpeg",
          Position: 2,
          Place: "asdaksjd;asjd;ajsdalks'dkafdjfglkdhfglkhdflgh",
          Description:
            "This is a looooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooooooooooooooooooooooooooooooooooong looooooooooooooooooooooooooooooooooooooooooooooooooooong description."
        },
        {
          name: "ThisIsALongBucketName",
          PhotoPath:
            "https://miro.medium.com/max/1200/1*t6aR5GKYBZfoRGJZoPkR9w.jpeg",
          Position: 2,
          Place: "Sirlanka",
          Description:
            "this is a looooooooooooooooooooooooooooooooooooooooooooooooooooong description."
        },
        {
          name: "Bucket3",
          PhotoPath:
            "https://miro.medium.com/max/1200/1*t6aR5GKYBZfoRGJZoPkR9w.jpeg",
          Position: 2,
          Place: "Sirlanka",
          Description: "This is a short description."
        },
        {
          name: "Bucket4",
          PhotoPath:
            "https://miro.medium.com/max/1200/1*t6aR5GKYBZfoRGJZoPkR9w.jpeg",
          Position: 2,
          Place: "Sirlanka",
          Description:
            "This is a looooooooooooooooooooooooooooooooooooooooooooooooooooong description."
        },

        {
          name: "Bucket5",
          PhotoPath:
            "https://miro.medium.com/max/1200/1*t6aR5GKYBZfoRGJZoPkR9w.jpeg",
          Position: 2,
          Place: "Sirlanka",
          Description:
            "This is a looooooooooooooooooooooooooooooooooooooooooooooooooooong description."
        }
      ],
      errors: []
    };
  },
  mounted() {
    HTTP.get("/bucketlists")
      .then(response => {
        this.bucketLists = response.data;
      })
      .catch(e => {
        this.$store.commit(
          "setAlert",
          { msg: e, type: "error" },
          { root: true }
        );
      });
  }
};
</script>

<style scoped></style>
