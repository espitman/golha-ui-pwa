<template>
  <div class="indexSceleton">
    <div class="horizontalScroller programs">
      <f7-skeleton-block class="title"></f7-skeleton-block>
      <div class="scroll">
        <f7-skeleton-block
          class="item"
          v-for="p in 4"
          :key="p"
        ></f7-skeleton-block>
      </div>
    </div>
    <div class="horizontalScroller singers">
      <f7-skeleton-block class="title"></f7-skeleton-block>
      <div class="scroll">
        <div class="item" v-for="p in 4" :key="p">
          <f7-skeleton-block class="img"></f7-skeleton-block>
          <f7-skeleton-block class="subtitle"></f7-skeleton-block>
        </div>
      </div>
    </div>
    <div class="horizontalScroller programs" style="margin-top:16px">
      <f7-skeleton-block class="title"></f7-skeleton-block>
      <div class="scroll">
        <f7-skeleton-block
          class="item"
          v-for="p in 4"
          :key="p"
        ></f7-skeleton-block>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.indexSceleton {
  .horizontalScroller {
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    .title {
      margin: 15px 0;
      width: 200px;
      height: 24px;
    }
    .scroll {
      overflow-x: auto;
      display: flex;
    }
    &.programs {
      .scroll {
        width: calc(4 * 330px);
      }
      .item {
        width: 320px;
        height: 120px;
        margin-left: 10px;
        border-radius: 7.5px;
      }
    }
    &.singers {
      margin-top: 16px;
      .scroll {
        width: calc(4 * 170px);
      }
      .item {
        width: 160px;
        height: 200px;
        margin-left: 10px;
        border-radius: 7.5px;
        overflow: hidden;
        .img {
          width: 160px;
          height: 160px;
          border-radius: 7.5px;
        }
        .subtitle {
          margin: 15px 0;
          width: 80%;
          margin-right: 10%;
          height: 24px;
        }
      }
    }
  }
}
</style>
