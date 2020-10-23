<template>
  <div
    class="trackRow"
    :class="{ current: $store.state.golha.currentTrack._id === track._id }"
  >
    <div class="inner">
      <Avatar :image="track.singer[0].image" size="64" radius="7.5" />
      <div>
        <h4>{{ track.title }}</h4>
        <Singers :singers="track.singer" color="#000" :reverse="false" />
      </div>
      <div class="controller">
        <f7-button
          v-if="
            $store.state.golha.currentTrack._id === track._id &&
              $store.state.golha.isPlaying
          "
          v-on:click="playTrack(track)"
        >
          <f7-icon size="28" f7="pause" color="black"></f7-icon>
        </f7-button>
        <f7-button v-else v-on:click="playTrack(track)">
          <f7-icon size="28" f7="play" color="black"></f7-icon>
        </f7-button>
        <f7-button v-on:click="openActionSheet(track)">
          <f7-icon size="28" f7="ellipsis" color="black"></f7-icon>
        </f7-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.trackRow {
  margin-bottom: 15px;
  background-color: #ffffff;
  padding: 15px;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 7.5px;
  &.current {
    background-color: #9e9e9e;
  }
  .inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    .avatar-img {
      margin-left: 15px;
      i {
        font-size: 3rem;
      }
    }
    h4 {
      margin: 0;
      padding: 0;
      font-family: IranSansWeb;
      font-weight: 400;
      color: #000000;
    }
  }
  .controller {
    width: 64px;
    height: 100%;
    position: absolute;
    left: 15px;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      opacity: 0.5;
    }
  }
}
</style>

<script>
export default {
  props: ["track", "isPlayList"],
  data() {
    return { loading: true, tracks: [], ac: {} };
  },
  methods: {
    playTrack(track) {
      if (this.$store.state.golha.currentTrack._id !== track._id) {
        if (!this.isPlayList) {
          this.$nuxt.$emit("track::play", track);
        } else {
          this.$nuxt.$emit("playList::play", track);
        }
      } else if (this.$store.state.golha.isPlaying) {
        this.$nuxt.$emit("track::pause");
      } else {
        this.$nuxt.$emit("track::resume");
      }
    },
    openActionSheet(track) {
      this.$nuxt.$emit("track::action", track);
    }
  }
};
</script>
