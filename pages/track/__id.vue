<template>
  <f7-page>
    <f7-navbar title="" backLink="Back"></f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <div class="main" v-if="!loading">
      <h1>{{ track.title }}</h1>
      <h2 v-if="track.subtitle">{{ track.subtitle }}</h2>
      <h3 v-if="track.dastgah">{{ track.dastgah }}</h3>
      <div v-if="track.singer.length">
        <h4>خواننده</h4>
        <span v-for="s in track.singer" :key="s._id"> {{ s.name }}، </span>
      </div>
      <div v-if="track.composer.length">
        <h4>آهنگساز</h4>
        <span v-for="p in track.composer" :key="p._id"> {{ p.name }}، </span>
      </div>
      <div v-if="track.poet.length">
        <h4>شاعر</h4>
        <span v-for="p in track.poet" :key="p._id"> {{ p.name }}، </span>
      </div>
      <div v-if="track.narrator.length">
        <h4>گوینده</h4>
        <span v-for="p in track.narrator" :key="p._id"> {{ p.name }}، </span>
      </div>
      <div v-if="track.narrator.length">
        <h4>نوازندگان</h4>
        <span v-for="m in track.musicians" :key="m.instrument">
          <h5>{{ m.instrument }}</h5>
          <span v-for="p in m.persons" :key="p._id">{{ p.name }}، </span>
        </span>
      </div>
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
    console.log(this.track);
    this.loading = false;
  }
};
</script>
