<template>
  <div class="player" v-bind:class="{ show: isShow }">
    <audio v-if="Object.keys(track).length" id="player">
      <source
        :src="`https://files.radio-golha.com/golha/music/${track.file}`"
        type="audio/mpeg"
      />
    </audio>
    <div class="range" v-if="isLoad">
      <f7-range
        :min="0"
        :max="track.duration"
        :step="1"
        :value="currentTime"
        :label="false"
        color="orange"
        @range:change="goToTime"
      ></f7-range>
    </div>
    <div class="row" v-if="isLoad">
      <div class="left">
        <div class="avatar">
          <img
            v-if="track.singer.length"
            class="img"
            :src="`https://files.radio-golha.com${track.singer[0].image}`"
          />
        </div>
        <div class="info">
          <div class="title">{{ track.title }}</div>
          <div class="singers">
            <span v-for="s in track.singer" :key="s._id">{{ s.name }}</span>
          </div>
        </div>
      </div>
      <div class="right">
        <f7-button v-on:click="fastForward()">
          <f7-icon size="22" f7="fastforward" color="white"></f7-icon>
        </f7-button>
        <f7-button v-if="playing" v-on:click="pause()">
          <f7-icon size="28" f7="pause" color="white"></f7-icon>
        </f7-button>
        <f7-button v-if="!playing" v-on:click="play()">
          <f7-icon size="28" f7="play" color="white"></f7-icon>
        </f7-button>
        <f7-button v-on:click="fastBackward()">
          <f7-icon
            size="22"
            f7="fastforward"
            class="reverse"
            color="white"
          ></f7-icon>
        </f7-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.player {
  position: fixed;
  width: calc(100% - 30px);
  padding: 0 15px;
  height: 75px;
  left: 0;
  bottom: 0;
  background: #0f0f0f;
  z-index: 5000;
  display: none;
  opacity: 0;
  &.show {
    opacity: 1;
    display: flex;
    -webkit-animation: slide-top 0.3s both;
    animation: slide-top 0.3s both;
  }
  .range {
    width: 100%;
    position: absolute;
    left: 0;
    top: -10px;
    .range-knob {
      display: none;
    }
  }
  .row {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    width: 100%;
    margin-top: 5px;
    .left {
      width: 50%;
      display: flex;
      flex-direction: row-reverse;
      .avatar {
        .img {
          width: 52px;
          height: 52px;
          object-fit: cover;
          filter: grayscale(100%);
          border-radius: 7.5px;
        }
      }
      .info {
        width: calc(100% - 52px);
        padding-left: 10px;
        .title {
          color: #ffffff;
          font-family: IranSansWeb;
          font-weight: 400;
          font-size: 0.75rem;
          text-align: left;
        }
        .singers {
          display: flex;
          flex-direction: row-reverse;
          span {
            margin: 0;
            padding: 0;
            font-family: IranSansWeb;
            font-weight: lighter;
            margin-top: 10px;
            font-size: 0.65rem;
            color: #ffffff;
            opacity: 0.75;
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
    }
    .right {
      display: flex;
      flex-direction: row;
      .reverse {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }
    }
  }
}
@-webkit-keyframes slide-top {
  0% {
    bottom: -75px;
  }
  100% {
    bottom: 0;
  }
}
@keyframes slide-top {
  0% {
    bottom: -75px;
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
      audio: {},
      isShow: false,
      playing: false,
      isLoad: false,
      currentTime: 0
    };
  },
  mounted: function() {
    this.$nuxt.$on("track::pkay", track => {
      this.isShow = true;
      this.isLoad = false;
      this.track = {};
      setTimeout(() => {
        this.track = track;
      });
      setTimeout(() => {
        this.player = document.getElementById("player");
        this.player.play();
        this.playing = true;
        this.isLoad = true;
        this.setCurrentTime();
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
    },
    setCurrentTime() {
      this.player.ontimeupdate = () => {
        this.currentTime = parseInt(this.player.currentTime);
      };
    },
    goToTime(value) {
      if (Math.abs(value - this.currentTime) > 5) {
        this.player.currentTime = this.track.duration - value;
      }
    },
    fastBackward() {
      this.player.currentTime -= 10;
    },
    fastForward() {
      this.player.currentTime += 10;
    }
  }
};
</script>
