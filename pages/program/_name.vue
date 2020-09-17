<template>
  <f7-page>
    <f7-navbar
      :title="
        $store.state.golha.programs.length
          ? $store.state.golha.programs.find(p => p.name === name).title
          : name
      "
      backLink="Back"
    ></f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <f7-block v-if="!loading">
      <TrackRow v-for="t in tracks" :key="t._id" :track="t" />
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  props: ["name"],
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
