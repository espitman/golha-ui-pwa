<template>
  <f7-page @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar>
      <InnerNavbar :title="title" />
    </f7-navbar>
    <SkeletonProgram v-if="loading" />
    <div class="main" v-if="!loading">
      <TrackRow
        v-for="t in tracks"
        :key="t._id"
        :track="t"
        :isPlayList="false"
      />
    </div>
  </f7-page>
</template>

<script>
import page from "../../mixins/page";
export default {
  props: ["title"],
  mixins: [page],
  data() {
    return { loading: true, tracks: [], info: {} };
  },
  async fetch() {
    const promises = [
      this.$axios.get(`${process.env.api.baseUrl}/dastgah/${this.title}`)
    ];
    const response = await Promise.all(promises);
    this.tracks = response[0].data.payload.tracks;
    this.loading = false;
  }
};
</script>
