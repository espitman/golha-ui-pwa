<template>
  <div
    class="player"
    :class="{ show: isShow, full: isFull }"
    v-hammer:pan="onSwipe"
  >
    <audio v-if="Object.keys(track).length" id="player">
      <source
        :src="`https://files.radio-golha.com/golha/music/${track.file}`"
        type="audio/mpeg"
      />
    </audio>
    <div class="player_bottom">
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
    <div class="player_full" v-if="isLoad">
      <img
        v-if="track.singer.length"
        class="img"
        :src="`https://files.radio-golha.com${track.singer[0].image}`"
      />

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
        <div class="times">
          <div class="start">{{ mmss(currentTime) }}</div>
          <div class="end">{{ mmss(track.duration) }}</div>
        </div>
      </div>

      <div class="info">
        <div class="title">{{ track.title }}</div>
        <div class="singers">
          <span v-for="s in track.singer" :key="s._id">{{ s.name }}</span>
        </div>
      </div>
      <div class="controller">
        <f7-button v-on:click="fastForward()">
          <f7-icon size="48" f7="fastforward_round" color="white"></f7-icon>
        </f7-button>
        <f7-button v-if="playing" v-on:click="pause()">
          <f7-icon size="60" f7="pause_round" color="white"></f7-icon>
        </f7-button>
        <f7-button v-if="!playing" v-on:click="play()">
          <f7-icon size="60" f7="play_round" color="white"></f7-icon>
        </f7-button>
        <f7-button v-on:click="fastBackward()">
          <f7-icon
            size="48"
            f7="fastforward_round"
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
  transition: height 0.4s ease-out;
  &.show {
    opacity: 1;
    display: flex;
    -webkit-animation: slide-top 0.4s both;
    animation: slide-top 0.4s both;
  }
  &.full {
    height: 100%;
    .player_bottom {
      opacity: 0;
    }
    .player_full {
      opacity: 1;
      top: 0;
    }
  }
  .player_bottom {
    width: 100%;
    transition: opacity 0.4s ease-out;
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
      margin-top: 15px;
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
              &::before {
                content: "،";
                padding-left: 5px;
              }
              &:last-child {
                &::before {
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
        margin-top: -10px;
        .reverse {
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
        }
      }
    }
  }
  //==========================
  .player_full {
    opacity: 0;
    transition: opacity 0.4s ease-out;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 75px;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 32px;
    .img {
      width: 90%;
      height: auto;
      object-fit: cover;
      filter: grayscale(100%);
      border-radius: 7.5px;
    }
    .range {
      width: 90%;
      direction: ltr;
      margin-top: 16px;
      .range-knob-wrap {
        display: none;
      }
      .times {
        width: 100%;
        display: flex;
        .start,
        .end {
          color: #ffffff;
          opacity: 0.6;
          flex: 1;
          font-family: IranSansWeb;
          font-weight: 300;
        }
        .end {
          display: flex;
          justify-content: flex-end;
        }
      }
    }
    .info {
      margin-top: 32px;
      width: 100%;
      .title {
        color: #ffffff;
        font-family: IranSansWeb;
        font-weight: 400;
        font-size: 1.5rem;
        text-align: center;
      }
      .singers {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: center;
        span {
          margin: 0;
          padding: 0;
          font-family: IranSansWeb;
          font-weight: lighter;
          margin-top: 10px;
          font-size: 0.85rem;
          color: #ffffff;
          opacity: 0.75;
          &::before {
            content: "،";
            padding-left: 5px;
          }
          &:last-child {
            &::before {
              content: "";
              padding-left: 0;
            }
          }
        }
      }
    }
    .controller {
      display: flex;
      flex-direction: row;
      margin-top: 32px;
      a {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
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
      isFull: false,
      playing: false,
      isLoad: false,
      currentTime: 0,
      pHeight: 75
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
    },
    onSwipe(e) {
      if (e.direction === 8) {
        this.isFull = true;
      }
      if (e.direction === 16) {
        this.isFull = false;
      }
    },
    mmss(secs) {
      var secNum = parseInt(secs, 10);
      var hours = Math.floor(secNum / 3600);
      var minutes = hours * 60 + (Math.floor(secNum / 60) % 60);
      var seconds = secNum % 60;
      if (hours === 0) {
        return [hours, minutes, seconds]
          .map(v => (v < 10 ? "0" + v : v))
          .filter((v, i) => v !== "00" || i > 0)
          .join(":");
      } else {
        return [minutes, seconds]
          .map(v => (v < 10 ? "0" + v : v))
          .filter((v, i) => v !== "00" || i > 0)
          .join(":");
      }
    }
  }
};
</script>
