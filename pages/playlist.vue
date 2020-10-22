<template>
  <f7-page>
    <f7-navbar>
      <InnerNavbar title="لیست پخش" />
    </f7-navbar>
    <div class="main">
      <TrackRow
        v-for="t in $store.state.golha.playList"
        :key="t._id"
        :track="t"
        :isPlayList="true"
      />
    </div>
  </f7-page>
</template>

<script>
export default {
  data() {
    return { tracks: [] };
  },
  mounted() {}
};
</script>
