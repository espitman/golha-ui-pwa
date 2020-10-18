<template>
  <div>
    <audio v-if="Object.keys(track).length" id="player">
      <source
        :src="`https://files.radio-golha.com/golha/music/${track.file}`"
        type="audio/mpeg"
      />
    </audio>

    <f7-sheet
      id="player-sheet"
      class="demo-sheet-swipe-to-step"
      style="height:auto; --f7-sheet-bg-color: #0f0f0f;"
      swipe-to-step
      v-bind:backdrop="false"
      v-bind:push="false"
      @sheet:stepopen="isFull = true"
      @sheet:stepclose="isFull = false"
    >
      <a
        href="/player"
        class="ripple-color-white"
        style="display:block;width:100%;"
        :class="isVisible ? 'visible' : 'invisible'"
      >
        <div class="sheet-modal-swipe-step player">
          <div class="player_bottom" v-if="!isFull">
            <a class="range" v-if="isLoad">
              <f7-range
                :min="0"
                :max="track.duration"
                :step="1"
                :value="currentTime"
                :label="false"
                color="orange"
                @range:change="goToTime"
              ></f7-range>
            </a>
            <div class="row" v-if="isLoad">
              <div class="left">
                <div class="avatar">
                  <img
                    v-if="track && track.singer && track.singer.length"
                    class="img"
                    :src="
                      `https://files.radio-golha.com${track.singer[0].image}`
                    "
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
        </div>
        <div class="player_bottom_large">
          <div v-if="isFull" class="inner">
            <div class="row">
              <div class="avatar">
                <img
                  v-if="track && track.singer && track.singer.length"
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
                <div class="duration-count">
                  <div class="duration">
                    {{ mmss(track.duration) }} / {{ mmss(currentTime) }}
                  </div>
                  <div
                    v-if="
                      this.$store.state.golha.playList &&
                        this.$store.state.golha.playList.length > 1
                    "
                    class="count"
                  >
                    {{ this.$store.state.golha.playList.length }} /
                    {{
                      this.$store.state.golha.playList.findIndex(
                        t => t._id === this.track._id
                      ) + 1
                    }}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <a class="range" v-if="isLoad">
                <f7-range
                  :min="0"
                  :max="track.duration"
                  :step="1"
                  :value="currentTime"
                  :label="false"
                  color="orange"
                  @range:change="goToTime"
                ></f7-range>
              </a>
            </div>
            <div class="row">
              <div class="controller">
                <f7-button v-on:click="fastForward()">
                  <f7-icon size="28" f7="fastforward" color="white"></f7-icon>
                </f7-button>
                <f7-button v-if="playing" v-on:click="pause()">
                  <f7-icon size="34" f7="pause" color="white"></f7-icon>
                </f7-button>
                <f7-button v-if="!playing" v-on:click="play()">
                  <f7-icon size="34" f7="play" color="white"></f7-icon>
                </f7-button>
                <f7-button v-on:click="fastBackward()">
                  <f7-icon
                    size="28"
                    f7="fastforward"
                    class="reverse"
                    color="white"
                  ></f7-icon>
                </f7-button>
              </div>
            </div>
          </div>
        </div>
      </a>
    </f7-sheet>
  </div>
</template>

<style lang="scss">
.invisible {
  // opacity: 0 !important;
  // pointer-events: none !important;
  display: none !important;
}
.player {
  width: calc(100% - 30px);
  padding: 0 15px;
  height: 75px;
  background: #0f0f0f;
  display: flex;
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
}
.player_bottom_large {
  width: 100%;
  padding: 8px;
  .inner {
    margin-top: -75px;
    .row {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      width: calc(100% - 16px);
      display: flex;
      flex-direction: row-reverse;
      .avatar {
        .img {
          width: 100px;
          height: 100px;
          object-fit: cover;
          filter: grayscale(100%);
          border-radius: 7.5px;
        }
      }
      .info {
        width: calc(100% - 100px - 10px);
        padding-left: 10px;
        .title {
          color: #ffffff;
          font-family: IranSansWeb;
          font-weight: 500;
          font-size: 1.25rem;
          text-align: left;
        }
        .duration-count {
          display: flex;
          flex-direction: row-reverse;
          font-size: 0.75rem;
          opacity: 0.75;
          margin-top: 18px;
          .duration {
            color: #ffffff;
            width: 50%;
            text-align: left;
          }
          .count {
            color: #ffffff;
            width: 50%;
            text-align: right;
          }
        }
      }
      .range {
        width: 100%;
        padding: 10px 0;
        .range-knob {
          display: none;
        }
      }
      .controller {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 0 0 20px 0;
        align-items: center;
        justify-content: center;
        .reverse {
          -webkit-transform: scaleX(-1);
          transform: scaleX(-1);
        }
      }
    }
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
      isVisible: true,
      currentTime: 0,
      pHeight: 75
    };
  },
  mounted: function() {
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
    this.$nuxt.$on("track::goToTime", time => {
      this.goToTime(time);
    });
    this.$nuxt.$on("track::fastForward", time => {
      this.fastForward();
    });
    this.$nuxt.$on("track::fastBackward", time => {
      this.fastBackward();
    });
    this.$nuxt.$on("player::hide", () => {
      console.log("player::hide", this.$nuxt.$route.path);
      this.isVisible = false;
    });
    this.$nuxt.$on("player::show", () => {
      console.log("player::show", this.$nuxt.$route.path);
      this.isVisible = true;
    });
    this.mediaSessionEventsHandler();
  },
  methods: {
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
        this.openSheet();
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
        this.$nuxt.$emit("track::time", this.currentTime);
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
    },
    openSheet() {
      this.$f7.sheet.open("#player-sheet");
    }
  }
};
</script>
