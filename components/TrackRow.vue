<template>
  <div class="trackRow" v-on:click="playTrack(track)">
    <div class="inner">
      <img
        class="img"
        :src="`https://files.radio-golha.com${track.singer[0].image}`"
      />
      <div>
        <h4>{{ track.title }}</h4>
        <div class="singers">
          <h6 v-for="s in track.singer" :key="s._id">{{ s.name }}</h6>
        </div>
      </div>
      <div class="controller">
        <f7-button v-if="$store.state.golha.currentTrack._id === track._id">
          <f7-icon size="28" f7="pause" color="black"></f7-icon>
        </f7-button>
        <f7-button v-else>
          <f7-icon size="28" f7="play" color="black"></f7-icon>
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
    .singers {
      display: flex;
      flex-direction: row;
      h6 {
        margin: 0;
        padding: 0;
        font-family: IranSansWeb;
        font-weight: lighter;
        margin-top: 10px;
        color: #000000;
        &::after {
          content: "،";
          padding-left: 5px;
        }
        &:last-child {
          &::after {
            content: "";
            padding-left: 0;
          }
        }
      }
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
      } else {
        // this.$nuxt.$emit("track::pause");
      }
    }
  }
};
</script>
