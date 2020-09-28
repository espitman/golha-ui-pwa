<template>
  <f7-page id="person-page">
    <f7-navbar :class="{ transparent }">
      <f7-nav-right>
        <img
          class="avatar"
          :src="`https://files.radio-golha.com${info.image}`"
        />
      </f7-nav-right>
      <f7-nav-title>{{ name }}</f7-nav-title>
      <f7-nav-left back-link="Back"> </f7-nav-left>
    </f7-navbar>
    <FullPageLoader v-if="loading" loading="loading" />
    <div class="person" v-if="!loading">
      <img class="img" :src="`https://files.radio-golha.com${info.image}`" />
    </div>
    <div class="main" v-if="!loading">
      <TrackRow v-for="t in tracks" :key="t._id" :track="t" />
    </div>
  </f7-page>
</template>

<style lang="scss">
#person-page {
  .navbar {
    .title {
      margin-right: 64px;
    }
    .avatar {
      width: 48px;
      height: 48px;
      margin-right: 8px;
      display: block;
      object-fit: cover;
      filter: grayscale(100%);
      transition: height 0.5s ease;
    }
    .left {
      position: absolute;
      left: 0;
    }
    &.transparent {
      .navbar-bg {
        display: none;
      }
      .title {
        color: #fff;
        margin-right: 16px;
      }
      .icon {
        color: #fff;
      }
      .avatar {
        display: none;
      }
    }
  }
}

.main {
  margin-top: -56px;
}
.person {
  width: 100%;
  margin-bottom: 15px;
  text-align: center;
  position: relative;
  top: -56px;
  .img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: grayscale(100%);
    transition: height 0.5s ease;
  }
}
</style>

<script>
export default {
  props: ["_id", "name"],
  data() {
    return { loading: true, tracks: [], info: {}, transparent: true };
  },
  async fetch() {
    const promises = [
      this.$axios.get(`https://api.radio-golha.com/api/v1/person/${this._id}`)
    ];
    const response = await Promise.all(promises);
    this.tracks = response[0].data.payload.tracks;
    this.info = response[0].data.payload.info;
    this.loading = false;
    setTimeout(this.eventScroll);
  },
  methods: {
    eventScroll() {
      const elm = document.getElementsByClassName("img")[0];
      const w = elm.clientWidth;
      console.log(
        elm,
        w,
        document
          .getElementById("person-page")
          .getElementsByClassName("page-content")[0]
      );
      document
        .getElementById("person-page")
        .getElementsByClassName("page-content")[0]
        .addEventListener("scroll", () => this.handleScroll(w));
    },
    handleScroll(w) {
      const st = document
        .getElementById("person-page")
        .getElementsByClassName("page-content")[0].scrollTop;
      if (st >= w - 56) {
        this.transparent = false;
      } else {
        this.transparent = true;
      }
    }
  }
  // destroyed() {
  //   document.removeEventListener("scroll", () => this.handleScroll(w));
  // }
};
</script>
