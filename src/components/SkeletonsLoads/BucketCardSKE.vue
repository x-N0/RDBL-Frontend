<template>
  <v-card class="mx-auto mt-5" max-width="20em">
    <v-img class="white--text" height="200px">
      <v-skeleton-loader type="image"></v-skeleton-loader>
    </v-img>
    <v-card-title>
      <v-skeleton-loader type="heading" width="20em" height="2em"></v-skeleton-loader>
    </v-card-title>
    <v-card-subtitle class="pb-3">
      <v-skeleton-loader type="text" width="5em"> </v-skeleton-loader>
    </v-card-subtitle>
    <v-card-text>
      <v-skeleton-loader type="text@2"></v-skeleton-loader>
    </v-card-text>
    <v-card-actions class="align-end">
      <v-skeleton-loader type="button" width="10em"></v-skeleton-loader>
      <v-skeleton-loader class="ml-5" type="button" width="12em"></v-skeleton-loader>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  name: "BucketCardSKE",
  inject: ["theme"]
};
</script>