<template>
  <f7-page id="player-page" @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar id="player-page-navbar" class="transparent">
      <f7-nav-right></f7-nav-right>
      <f7-nav-title></f7-nav-title>
      <f7-nav-left back-link=""> </f7-nav-left>
    </f7-navbar>
    <div class="img-box">
      <Avatar
        :image="$store.state.golha.currentTrack.singer[0].image"
        radius="7.5"
      />
      <f7-fab
        position="right-bottom"
        slot="fixed"
        color="yellow"
        href="/playlist"
        v-if="$store.state.golha.playList.length"
      >
        <f7-icon
          class="size-25"
          ios="f7:list_dash"
          aurora="f7:list_dash"
          md="material:list_dash"
        ></f7-icon>
      </f7-fab>
    </div>
    <h1>{{ $store.state.golha.currentTrack.title }}</h1>
    <Singers
      :singers="$store.state.golha.currentTrack.singer"
      color="#FFF"
      :reverse="true"
      :center="false"
    />
    <div class="range">
      <RangeSlider
        class="slider"
        min="0"
        :max="$store.state.golha.currentTrack.duration"
        step="1"
        v-model="currentTime"
        @change="goToTime"
      >
      </RangeSlider>
      <div class="text">
        <div class="left">{{ mmss(currentTime) }}</div>
        <div class="right">
          {{ mmss($store.state.golha.currentTrack.duration) }}
        </div>
      </div>
    </div>
    <div class="controller">
      <f7-button v-on:click="fastForward()">
        <f7-icon size="34" f7="fastforward" color="white"></f7-icon>
      </f7-button>
      <f7-button v-if="$store.state.golha.isPlaying" v-on:click="pause()">
        <f7-icon size="40" f7="pause" color="white"></f7-icon>
      </f7-button>
      <f7-button v-if="!$store.state.golha.isPlaying" v-on:click="play()">
        <f7-icon size="40" f7="play" color="white"></f7-icon>
      </f7-button>
      <f7-button v-on:click="fastBackward()">
        <f7-icon
          size="34"
          f7="fastforward"
          class="reverse"
          color="white"
        ></f7-icon>
      </f7-button>
    </div>
  </f7-page>
</template>

<style lang="scss">
#player-page-navbar {
  .left {
    position: absolute;
    left: 0;
    .icon {
      color: #fff;
    }
  }
  &.transparent {
    .navbar-bg {
      display: none;
    }
  }
}

#player-page {
  background: #0f0f0f;
  .img-box {
    position: relative;
    margin-top: -56px;
    .avatar-img {
      width: 100%;
      &.avatar-no-img {
        background-color: #060606;
        padding-bottom: 100%;
        i {
          position: absolute;
          top: 40%;
        }
      }
    }
    .fab {
      bottom: -24px;
      i {
        font-size: 35px;
      }
    }
  }
  h1 {
    color: #fff;
    text-align: center;
    font-family: IranSansWeb;
    font-weight: 400;
  }
  .singers {
    justify-content: center;
  }
  .controller {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 20px 0 20px 0;
    align-items: center;
    justify-content: center;
    .reverse {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }
  }
  .range {
    width: 100%;
    direction: ltr;
    width: 90%;
    margin: 10px 5%;
    .range-slider {
      width: 100%;
      padding: 0;
      margin-bottom: 8px;
    }
    .text {
      display: flex;
      color: #fff;
      .left,
      .right {
        width: 50%;
      }
      .right {
        text-align: right;
      }
    }
  }
}
</style>

<script>
import page from "../mixins/page";
import RangeSlider from "vue-range-slider";

export default {
  mixins: [page],
  data() {
    return {
      track: this.$store.state.golha.currentTrack,
      currentTime: 0
    };
  },
  components: {
    RangeSlider
  },
  mounted() {
    this.player = document.getElementById("player");
    this.$nuxt.$on("track::time", time => {
      this.currentTime = time;
    });
  },
  methods: {
    play() {
      const track = this.$store.state.golha.currentTrack;
      if (this.$store.state.golha.currentTrack._id !== track._id) {
        this.$nuxt.$emit("track::play", track);
      } else if (this.$store.state.golha.isPlaying) {
        this.$nuxt.$emit("track::pause");
      } else {
        this.$nuxt.$emit("track::resume");
      }
    },
    pause() {
      this.$nuxt.$emit("track::pause", this.$store.state.golha.currentTrack);
    },
    goToTime(value) {
      this.$nuxt.$emit("track::goToTime", value);
    },
    fastForward() {
      this.$nuxt.$emit("track::fastForward");
    },
    fastBackward() {
      this.$nuxt.$emit("track::fastBackward");
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
