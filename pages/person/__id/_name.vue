<template>
  <f7-page id="person-page" @page:init="pageInit" @page:reinit="pageInit">
    <f7-navbar id="person-page-navbar" :class="{ transparent }">
      <f7-nav-right>
        <Avatar :image="info.image" radius="0" />
      </f7-nav-right>
      <f7-nav-title>{{ name }}</f7-nav-title>
      <f7-nav-left back-link=""> </f7-nav-left>
    </f7-navbar>
    <SkeletonPerson v-if="loading" />
    <div class="person" v-if="!loading">
      <Avatar :image="info.image" radius="0" />
    </div>
    <div class="main" v-if="!loading">
      <TrackRow
        v-for="t in tracks"
        :key="t._id"
        :track="t"
        :isPlayList="false"
      />
    </div>
  </f7-page>
</template>

<style lang="scss">
#person-page-navbar {
  .title {
    margin-right: 64px;
  }
  .avatar-img {
    width: 48px;
    height: 48px;
    margin-right: 8px;
    display: block;
    transition: height 0.5s ease;
    i {
     font-size: 3rem;
    }
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
    .avatar-img {
      display: none;
    }
  }
}
.ios {
  #person-page-navbar {
    &.transparent {
      .title {
        margin-right: 32px;
      }
    }
  }
}
#person-page {
  .main {
    margin-top: -56px;
  }
  .person {
    width: 100%;
    margin-bottom: 15px;
    text-align: center;
    position: relative;
    top: -56px;
    .avatar-img {
      width: 100%;
      height: auto;
      &.avatar-no-img {
        padding-bottom: 100%;
        i {
          position: absolute;
          top: 40%;
        }
      }
    }
  }
}
</style>

<script>
import page from "../../../mixins/page";
export default {
  props: ["_id", "name"],
  mixins: [page],
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
      const elm = document.getElementsByClassName("avatar-img")[1];
      const w = elm.clientWidth;
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
};
</script>
