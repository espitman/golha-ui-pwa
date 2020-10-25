<template>
  <f7-actions class="actionsTrack">
    <f7-actions-group>
      <f7-actions-button
        v-if="
          $store.state.golha.currentTrack._id !== track._id ||
            !$store.state.golha.isPlaying
        "
        v-on:click="play()"
        >پخش</f7-actions-button
      >
      <f7-actions-button v-else v-on:click="pause()">توقف</f7-actions-button>
      <f7-actions-button v-on:click="addToPlayList()"
        >افزودن به لیست درحال پخش</f7-actions-button
      >
      <f7-actions-button>
        <a :href="`/track/${track._id}`">
          مشخصات
        </a>
      </f7-actions-button>
      <f7-actions-button color="red">لغو</f7-actions-button>
    </f7-actions-group>
  </f7-actions>
</template>

<style lang="scss">
.actionsTrack {
  .actions-button-text {
    text-align: right;
    font-family: IranSansWeb;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>

<script>
export default {
  data() {
    return { track: {} };
  },
  mounted: function() {
    this.$nuxt.$on("track::action", track => {
      this.track = track;
      this.$f7.actions.open(".actionsTrack");
    });
  },
  methods: {
    play() {
      if (this.$store.state.golha.currentTrack._id !== this.track._id) {
        this.$nuxt.$emit("track::play", this.track);
      } else if (this.$store.state.golha.isPlaying) {
        this.$nuxt.$emit("track::pause");
      } else {
        this.$nuxt.$emit("track::resume");
      }
    },
    pause() {
      this.$nuxt.$emit("track::pause", this.track);
    },
    addToPlayList() {
      this.$nuxt.$emit("track::addToPlayList", this.track);
    }
  }
};
</script>
