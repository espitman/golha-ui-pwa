<template>
  <div class="skeletonTrackRow">
    <div class="inner">
      <f7-skeleton-block class="img" slot="media"></f7-skeleton-block>
      <div>
        <f7-skeleton-block class="title"></f7-skeleton-block>
        <f7-skeleton-block class="singer"></f7-skeleton-block>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.skeletonTrackRow {
  margin: 15px;
  background-color: #ffffff;
  padding: 15px;
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 7.5px;
  .inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    .img {
      width: 64px;
      height: 64px;
      border-radius: 7.5px;
      margin-left: 15px;
    }
    .title {
      width: 100px;
    }
    .singer {
      width: 200px;
      margin-top: 15px;
    }
  }
}
</style>
