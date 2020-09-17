<template>
  <f7-page>
    <f7-navbar :title="title" backLink="Back"></f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <f7-block v-if="!loading">
      <TrackRow v-for="t in tracks" :key="t._id" :track="t" />
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return { loading: true, tracks: [], info: {} };
  },
  async fetch() {
    const promises = [
      this.$axios.get(
        `https://api.radio-golha.com/api/v1/dastgah/${this.title}`
      )
    ];
    const response = await Promise.all(promises);
    this.tracks = response[0].data.payload.tracks;
    this.loading = false;
  }
};
</script>
