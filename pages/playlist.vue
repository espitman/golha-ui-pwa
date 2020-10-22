<template>
  <f7-page @page:init="pageInit" @page:reinit="pageInit">
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
import page from "../mixins/page";
export default {
  mixins: [page],
  data() {
    return { tracks: [] };
  },
  mounted() {}
};
</script>
