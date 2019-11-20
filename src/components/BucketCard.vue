<template>
  <v-card class="mx-auto" max-width="400">
    <v-img class="white--text align-end" height="200px" src="">
      <v-card-title>{{ BucketName }}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0"
      >This experience is on top: {{ BucketPosition }}</v-card-subtitle
    >

    <v-card-text class="text--primary">
      <div>{{ BucketPlace }}</div>
      <div>{{ BucketDescript }}</div>
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
</template>

<script>
export default {
  name: "BucketCard",
  props: {
    BucketPhoto: null,
    BucketName: null,
    BucketPosition: null,
    BucketPlace: null,
    BucketDescript: null
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
