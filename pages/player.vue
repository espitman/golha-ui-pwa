<template>
  <f7-page id="player-page">
    <img
      class="img"
      :src="
        `https://files.radio-golha.com${$store.state.golha.currentTrack.singer[0].image}`
      "
    />
  </f7-page>
</template>

<style lang="scss">
#player-page {
  .img {
    width: 100%;
    object-fit: cover;
    filter: grayscale(100%);
  }
}
</style>
