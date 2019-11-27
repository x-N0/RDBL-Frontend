<template>
  <div class="mx-auto mt-5">
    <BucketCardSKE v-if="isLoading"></BucketCardSKE>
    <v-card v-else class="mx-auto mt-5 text-break" max-width="20em">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="Bucket.PhotoPath"
      >
        <v-card-title text-truncate>{{ Bucket.Name }}</v-card-title>
      </v-img>

      <v-card-subtitle class="pb-3"
        >This experience is on top: {{ Bucket.Position }}
      </v-card-subtitle>

      <v-card-text class="text--primary" text-truncate>
        <span class="d-inline-block text-truncate" style="max-width: 20em">
          {{ Bucket.Place }}
        </span>
        <v-spacer />
        <div class="d-inline-block text-truncate" style="max-width: 20em;">
          {{ Bucket.Description }}
        </div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" text>
          Tell a Friend
        </v-btn>

        <v-btn color="accent" text>
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
  import BucketCardSKE from "./SkeletonsLoads/BucketCardSKE";

  export default {
  name: "BucketCard",
  props: {
    Bucket: {
      Name: {
        required: true,
        type: String
      },
      Position: {
        type: [String, Number]
      },
      Place: { type: String },
      Description: {
        required: true,
        type: String
      },
      PhotoPath: {
        required: true,
        type: String
      }
    }
  },
  watch: {
    Bucket() {
      this.isLoading = false;
    }
  },
  methods: {
    textWrapper(text) {
      return text.length < 150 ? text : text + "[:150]+...";
    }
  },
  components: {
    BucketCardSKE
  },
  data() {
    return { isLoading: true };
  }
};
</script>

<style scoped lang="scss">
@import "../assets/scss/main.scss";
</style>
