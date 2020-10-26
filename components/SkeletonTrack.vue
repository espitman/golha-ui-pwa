<template>
  <div class="skeletonTrack">
    <f7-skeleton-block class="title"></f7-skeleton-block>
    <f7-skeleton-block class="subtitle"></f7-skeleton-block>
    <f7-skeleton-block class="dastgah"></f7-skeleton-block>
    <div class="items">
      <div class="item" v-for="p in 9" :key="p">
        <f7-skeleton-block class="img"></f7-skeleton-block>
        <f7-skeleton-block class="name"></f7-skeleton-block>
        <f7-skeleton-block class="dsg"></f7-skeleton-block>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skeletonTrack {
  padding-top: 30px;
  .title,
  .subtitle,
  .dastgah {
    margin: 0 auto 15px auto;
  }
  .title {
    width: 300px;
    height: 40px;
  }
  .subtitle {
    width: 250px;
    height: 35px;
  }
  .dastgah {
    width: 200px;
    height: 25px;
  }
  .items {
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;
    .item {
      width: calc(100% / 3 - 10px);
      margin-left: 10px;
      margin-bottom: 30px;
      .img {
        width: 100%;
        height: 0;
        border-radius: 7.5px;
        padding-bottom: 100%;
      }
      .name {
        width: 80%;
        margin: 10px 10%;
      }
       .dsg {
        width: 70%;
        margin: 10px 15%;
      }
    }
  }

}
</style>
