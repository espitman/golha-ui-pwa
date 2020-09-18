<template>
  <f7-page>
    <f7-navbar title="track" backLink="Back"></f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <div class="main" v-if="!loading">
      <h2>{{ track.title }}</h2>
      <audio controls autoplay="autoplay">
        <source
          :src="`https://files.radio-golha.com/golha/music/${track.file}`"
          type="audio/mpeg"
        />
      </audio>
    </div>
  </f7-page>
</template>

<script>
export default {
  props: ["_id"],
  data() {
    return { loading: true };
  },
  async fetch() {
    const promises = [
      this.$axios.get(`https://api.radio-golha.com/api/v1/track/${this._id}`)
    ];
    const response = await Promise.all(promises);
    this.track = response[0].data.payload;
    this.loading = false;
  }
};
</script>
