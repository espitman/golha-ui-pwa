<template>
  <f7-page @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar>
      <InnerNavbar
        :title="
          $store.state.golha.programs.length
            ? $store.state.golha.programs.find(p => p.name === name).title
            : name
        "
      />
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
  props: ["name"],
  mixins: [page],
  data() {
    return { loading: true, tracks: [], programs: [] };
  },
  async fetch() {
    const promises = [
      this.$axios.get(`https://api.radio-golha.com/api/v1/program/${this.name}`)
    ];
    const response = await Promise.all(promises);
    this.tracks = response[0].data.payload;
    this.loading = false;
    this.programs = this.$store.state.golha.programs;
  },
  mounted() {}
};
</script>
