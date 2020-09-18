<template>
  <f7-page>
    <f7-navbar :title="name" backLink="Back"></f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <div class="main" v-if="!loading">
      <div class="person">
        <img class="img" :src="`https://files.radio-golha.com${info.image}`" />
      </div>
      <TrackRow v-for="t in tracks" :key="t._id" :track="t" />
    </div>
  </f7-page>
</template>

<style lang="scss">
.person {
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  .img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    filter: grayscale(100%);
    border-radius: 50%;
  }
}
</style>

<script>
export default {
  props: ["_id", "name"],
  data() {
    return { loading: true, tracks: [], info: {} };
  },
  async fetch() {
    const promises = [
      this.$axios.get(`https://api.radio-golha.com/api/v1/person/${this._id}`)
    ];
    const response = await Promise.all(promises);
    this.tracks = response[0].data.payload.tracks;
    this.info = response[0].data.payload.info;
    this.loading = false;
  }
};
</script>
