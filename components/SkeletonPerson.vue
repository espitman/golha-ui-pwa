<template>
  <div class="skeletonPerson">
    <f7-skeleton-block class="avatar" slot="media"></f7-skeleton-block>
    <SkeletonTracks v-for="i in 5" :key="i" />
  </div>
</template>

<style lang="scss">
.skeletonPerson {
  .avatar {
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
    margin-top: -56px;
  }
}
</style>
