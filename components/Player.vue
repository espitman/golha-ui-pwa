<template>
  <div class="player" v-bind:class="{ show: isShow }">
    <span class="title">{{ track.title }}</span>
    <f7-button v-if="playing" v-on:click="pause()">
      <f7-icon f7="pause" color="white"></f7-icon>
    </f7-button>
    <f7-button v-if="!playing" v-on:click="play()">
      <f7-icon f7="play" color="white"></f7-icon>
    </f7-button>

    <audio v-if="Object.keys(track).length" id="player">
      <source
        :src="`https://files.radio-golha.com/golha/music/${track.file}`"
        type="audio/mpeg"
      />
    </audio>
  </div>
</template>

<style lang="scss">
.player {
  position: fixed;
  width: calc(100% - 30px);
  padding: 0 15px;
  height: 70px;
  left: 0;
  bottom: 0;
  background: #0f0f0f;
  z-index: 5000;
  display: none;
  border-radius: 10px 10px 0 0;
  opacity: 0;
  &.show {
    opacity: 1;
    display: flex;
    -webkit-animation: slide-top 0.3s both;
    animation: slide-top 0.3s both;
  }
  .title {
    color: #ffffff;
  }
}
@-webkit-keyframes slide-top {
  0% {
    bottom: -70px;
  }
  100% {
    bottom: 0;
  }
}
@keyframes slide-top {
  0% {
    bottom: -70px;
  }
  100% {
    bottom: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      track: {},
      isShow: false,
      playing: false
    };
  },
  mounted: function() {
    this.$nuxt.$on("track::pkay", track => {
      this.isShow = true;
      this.track = {};
      setTimeout(() => {
        this.track = track;
      });
      setTimeout(() => {
        this.player = document.getElementById("player");
        this.player.play();
        this.playing = true;
      });
    });
  },
  methods: {
    play() {
      this.player.play();
      this.playing = true;
    },
    pause() {
      this.player.pause();
      this.playing = false;
    }
  }
};
</script>
