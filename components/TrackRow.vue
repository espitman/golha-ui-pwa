<template>
  <div
    class="trackRow"
    :class="{ current: $store.state.golha.currentTrack._id === track._id }"
    v-on:click="playTrack(track)"
  >
    <div class="inner">
      <img
        class="img"
        :src="`https://files.radio-golha.com${track.singer[0].image}`"
      />
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
        >
          <f7-icon size="28" f7="pause" color="black"></f7-icon>
        </f7-button>
        <f7-button v-else>
          <f7-icon size="28" f7="play" color="black"></f7-icon>
        </f7-button>
        <f7-button>
          <f7-icon size="28" f7="more" color="black"></f7-icon>
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
    .img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      filter: grayscale(100%);
      border-radius: 7.5px;
      margin-left: 15px;
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
    left: 0;
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
  props: ["track"],
  data() {
    return { loading: true, tracks: [] };
  },
  methods: {
    playTrack(track) {
      if (this.$store.state.golha.currentTrack._id !== track._id) {
        this.$nuxt.$emit("track::play", track);
      } else if (this.$store.state.golha.isPlaying) {
        this.$nuxt.$emit("track::pause");
      } else {
        this.$nuxt.$emit("track::resume");
      }
    }
  }
};
</script>
