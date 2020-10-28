<template>
  <f7-page @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar>
      <Navbar />
    </f7-navbar>
    <SkeletonIndex v-if="loading" />
    <div v-if="!loading">
      <ProgramsScroller :programs="programs" />
      <SingersScroller :singers="singers" />
      <DastgahsScroller :dastgahs="dastgahs" />
    </div>
  </f7-page>
</template>

<script>
import page from "../mixins/page";
export default {
  mixins: [page],
  data() {
    return { programs: [], singers: [], dastgahs: [], loading: true };
  },
  async fetch() {
    const promises = [
      this.$axios.get(process.env.api.baseUrl + "/program"),
      this.$axios.get(process.env.api.baseUrl + "/person/role/singer"),
      this.$axios.get(process.env.api.baseUrl + "/dastgah")
    ];
    const response = await Promise.all(promises);
    this.programs = response[0].data.payload.programs;
    this.singers = response[1].data.payload.persons;
    this.dastgahs = response[2].data.payload.dastgah;
    this.loading = false;
    this.$store.commit("golha/setPrograms", this.programs);
  }
};
</script>
