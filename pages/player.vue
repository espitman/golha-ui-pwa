<template>
  <f7-page id="player-page" @page:init="pageInit" @page:beforeout="beforeout">
    <img
      class="img"
      :src="`https://files.radio-golha.com${track.singer[0].image}`"
    />
    <h1>{{ track.title }}</h1>
    <Singers
      :singers="track.singer"
      color="#FFF"
      :reverse="true"
      :center="false"
    />
  </f7-page>
</template>

<style lang="scss">
#player-page {
  background: #0f0f0f;
  .img {
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
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
}
</style>

<script>
export default {
  data() {
    return {
      track: this.$store.state.golha.currentTrack
    };
  },
  methods: {
    pageInit() {
      this.$nuxt.$emit("player::hide");
    },
    beforeout() {
      this.$nuxt.$emit("player::show");
    }
  }
};
</script>
