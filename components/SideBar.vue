<template>
  <f7-panel class="sideBar" right resizable>
    <f7-view>
      <f7-page>
        <div class="top">
          <div class="topInner">
            <div class="topInnerBox">
              <img class="icon" src="~/assets/images/icon.png" />
              <div>
                <div class="name">رادیو گل‌ها</div>
                <div class="version">نسخه بتا</div>
              </div>
            </div>
          </div>
        </div>
      </f7-page>
    </f7-view>
  </f7-panel>
</template>

<style lang="scss">
.sideBar {
  .top {
    background: #0f0f0f;
    padding-bottom: calc(9 / 16 * 100%);
    position: relative;
    .topInner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      .topInnerBox {
        width: calc(100% - 16px);
        height: calc(100% - 8px - 24px);
        position: absolute;
        padding: 8px;
        padding-bottom: 24px;
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        .icon {
          width: 64px;
          height: auto;
        }
        .name {
          color: #fff;
          font-family: IranSansWeb;
          font-weight: 300;
          margin-right: 8px;
          margin-top: 8px;
        }
        .version {
          color: #fff;
          opacity: 0.6;
          font-family: IranSansWeb;
          font-weight: lighter;
          margin-right: 8px;
          margin-top: 8px;
          font-size: 0.75em;
        }
      }
    }
  }
}
</style>
