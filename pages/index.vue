<template>
  <f7-page>
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
export default {
  data() {
    return { programs: [], singers: [], dastgahs: [], loading: true };
  },
  async fetch() {
    const promises = [
      this.$axios.get("https://api.radio-golha.com/api/v1/program"),
      this.$axios.get("https://api.radio-golha.com/api/v1/person/role/singer"),
      this.$axios.get("https://api.radio-golha.com/api/v1/dastgah")
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
