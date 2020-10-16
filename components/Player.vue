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
            <Singers
              :singers="track.singer"
              color="#FFF"
              :reverse="true"
              :center="false"
            />
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
    <div class="popup popup-player">
      <div class="block">
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
            <Singers
              :singers="track.singer"
              color="#FFF"
              :reverse="true"
              :center="true"
            />
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
}
.popup {
  background: #0f0f0f;
}
.player_full {
  background: #0f0f0f;
  opacity: 1;
  // transition: opacity 0.4s ease-out;
  width: 100%;
  height: 100%;
  // position: absolute;
  top: 0px;
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
import Framework7 from "framework7";
import Dom7 from "dom7";

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
    this.popupReady();
    this.$nuxt.$on("track::play", track => {
      this.clearPlayList();
      this.doPlay(track);
    });
    this.$nuxt.$on("track::pause", track => {
      this.pause();
    });
    this.$nuxt.$on("track::resume", track => {
      this.play();
    });
    this.$nuxt.$on("track::addToPlayList", track => {
      this.addToPlayList(track);
    });
    this.mediaSessionEventsHandler();
  },
  methods: {
    popupReady() {
      this.$f7ready(f7 => {
        var swipeToClosePopup = f7.popup.create({
          el: ".popup-player",
          swipeToClose: "to-bottom"
        });
      });
    },
    doPlay(track) {
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
        this.setAudioEvent();
        this.setMediaSession();
      });
      this.$store.commit("golha/setCurrentTrack", track);
      this.$store.commit("golha/setIsPlaying", true);
    },
    play() {
      this.player.play();
      this.playing = true;
      this.$store.commit("golha/setIsPlaying", true);
      this.setMediaSession();
    },
    pause() {
      this.player.pause();
      this.playing = false;
      this.$store.commit("golha/setIsPlaying", false);
    },
    setAudioEvent() {
      this.player.ontimeupdate = () => {
        this.currentTime = parseInt(this.player.currentTime);
      };
      this.player.onended = () => {
        this.pause();
        this.handlePlayList();
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
      const $$ = Dom7;
      if (e.direction === 8) {
        this.$f7.popup.open(".popup-player");
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
    },
    setMediaSession() {
      if ("mediaSession" in navigator) {
        const src = `https://files.radio-golha.com${this.track.singer[0].image}`;
        navigator.mediaSession.metadata = new MediaMetadata({
          title: this.track.title,
          artist: this.track.singer[0].name,
          album: this.track.dastgah,
          artwork: [{ src }]
        });
      }
    },
    mediaSessionEventsHandler() {
      const self = this;
      navigator.mediaSession.setActionHandler("play", function() {
        self.play();
      });
      navigator.mediaSession.setActionHandler("pause", function() {
        self.pause();
      });
    },
    addToPlayList(track) {
      let playList = this.$store.state.golha.playList || [];
      playList.push(track);
      playList = [...new Set(playList)];
      this.$store.commit("golha/setPlayList", playList);
      if (playList.length === 1) {
        this.doPlay(track);
      }
    },
    clearPlayList() {
      this.$store.commit("golha/setPlayList", []);
    },
    handlePlayList() {
      const playList = this.$store.state.golha.playList;
      if (playList && playList.length > 1) {
        const currentIndex = playList.findIndex(t => t._id === this.track._id);
        const nextTrack = playList[currentIndex + 1];
        if (nextTrack) {
          this.doPlay(nextTrack);
        }
      }
    }
  }
};
</script>
