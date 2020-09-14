<template>
  <f7-page>
    <f7-navbar>
      <Navbar />
    </f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <div v-if="!loading">
      <ProgramsScroller :programs="programs" />
      <SingersScroller :singers="singers" />

      <f7-list class="searchbar-hide-on-search">
        <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
        <f7-list-item title="Test 1" link="/test/"></f7-list-item>
        <f7-list-item title="Tabs" link="/tabs/"></f7-list-item>
        <f7-list-item title="Action Sheet" link="/action-sheet/"></f7-list-item>
        <f7-list-item title="Scroller" link="/scroller/"></f7-list-item>
        <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
        <f7-list-item title="Test 1" link="/test/"></f7-list-item>
        <f7-list-item title="Tabs" link="/tabs/"></f7-list-item>
        <f7-list-item title="Action Sheet" link="/action-sheet/"></f7-list-item>
        <f7-list-item title="Scroller" link="/scroller/"></f7-list-item>
        <f7-list-item title="About Nuxt7" link="/about/"></f7-list-item>
        <f7-list-item title="Test 1" link="/test/"></f7-list-item>
        <f7-list-item title="Tabs" link="/tabs/"></f7-list-item>
        <f7-list-item title="Action Sheet" link="/action-sheet/"></f7-list-item>
        <f7-list-item title="Scroller" link="/scroller/"></f7-list-item>
      </f7-list>
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return { programs: [], singers: [], loading: true };
  },
  async fetch() {
    const promises = [
      this.$axios.get("https://api.radio-golha.com/api/v1/program"),
      this.$axios.get("https://api.radio-golha.com/api/v1/person/role/singer")
    ];
    const response = await Promise.all(promises);
    this.programs = response[0].data.payload.programs;
    this.singers = response[1].data.payload.persons;
    this.loading = false;
  },
  mounted() {
    this.$store.commit("todo/add", "saeed");
  }
};
</script>
