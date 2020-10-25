<template>
  <f7-page id="track-page" @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar id="track-page-navbar" class="transparent">
      <f7-nav-right></f7-nav-right>
      <f7-nav-title></f7-nav-title>
      <f7-nav-left back-link=""> </f7-nav-left>
    </f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <div class="main" v-if="!loading">
      <h1>{{ track.title }}</h1>
      <h2 v-if="track.subtitle">{{ track.subtitle }}</h2>
      <h3 v-if="track.dastgah">{{ track.dastgah }}</h3>
      <TrackPerson
        v-if="track.singer.length"
        title="خواننده"
        :persons="track.singer"
      />
      <TrackPerson
        v-if="track.composer.length"
        title="آهنگساز"
        :persons="track.composer"
      />
      <TrackPerson
        v-if="track.poet.length"
        title="شاعر"
        :persons="track.poet"
      />
      <TrackPerson
        v-if="track.narrator.length"
        title="گوینده"
        :persons="track.narrator"
      />

      <div v-if="track.musicians.length">
        <span v-for="m in track.musicians" :key="m.instrument">
          <TrackPerson
            v-if="m.instrument != 'undefined' && m.persons.length"
            :title="m.instrument"
            :persons="m.persons"
          />
        </span>
      </div>
    </div>
  </f7-page>
</template>

<style lang="scss">
#track-page {
  .main {
    display: inline-block;
    width: calc(100% - 30px);
  }
  h1,
  h2,
  h3 {
    text-align: center;
    font-family: IranSansWeb;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
  }
  h2 {
    font-weight: 300;
  }
  h3 {
    font-weight: 200;
  }
  #track-page-navbar {
    .navbar-bg {
      background: none;
      &::before {
        background: none;
      }
    }
    .left {
      position: absolute;
      left: 0;
    }
    i {
      color: #000;
    }
  }
}
</style>

<script>
import page from "../../mixins/page";
export default {
  mixins: [page],
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
