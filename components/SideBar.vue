<template>
  <f7-panel class="sideBar" right resizable>
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
      <div class="bot">
        <f7-list>
          <f7-list-item link="/login" title="ورود اعضا" class="panel-close">
            <f7-icon slot="media" material="home"></f7-icon>
          </f7-list-item>
          <f7-list-item link="/about" title="درباره ما" class="panel-close">
            <f7-icon slot="media" material="info_circle"></f7-icon>
          </f7-list-item>
        </f7-list>
      </div>
    </f7-page>
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
  .bot {
    .list {
      margin-top: 0;
      .item-media {
        margin-right: 10px;
      }
      .item-inner {
        padding-right: 16px;
        .item-title {
          font-family: IranSansWeb;
          font-weight: 300;
          width: 100%;
          &::after {
            font-family: "framework7-core-icons";
            font-weight: normal;
            font-style: normal;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            -moz-osx-font-smoothing: grayscale;
            font-feature-settings: "liga";
            text-align: center;
            display: block;
            width: 100%;
            height: 100%;
            font-size: 20px;
            position: absolute;
            top: 50%;
            width: 8px;
            height: 14px;
            margin-top: -7px;
            font-size: 20px;
            font-size: var(--f7-list-chevron-icon-font-size);
            line-height: 14px;
            color: rgba(0, 0, 0, 0.2);
            color: var(--f7-list-chevron-icon-color);
            pointer-events: none;
            left: 0;
            content: "chevron_left";
            content: var(--f7-list-chevron-icon-left);
          }
        }
        &::before {
          all: unset;
        }
      }
    }
  }
}
</style>
