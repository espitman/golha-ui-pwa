<template>
  <div class="horizontalScroller">
    <h3>برنامه‌ها ({{ programs.length }})</h3>
    <div class="scroll">
      <ul class="programs">
        <li v-for="p in programs" :key="p.name">
          <f7-link :href="`/program/${p.name}`" class="program-box">
            <div class="program-box-overlay"></div>
            <h4>{{ p.title }}</h4>
            <div class="program-info">تعداد برنامه: {{ p.count }}</div>
          </f7-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.horizontalScroller {
  padding: 0 10px;
  h3 {
    margin-bottom: 0;
    font-family: IranSansWeb;
    font-weight: 400;
    font-size: 1rem;
  }
  .scroll {
    overflow-x: auto;
  }
  ul.programs {
    list-style: none;
    display: flex;
    padding: 0;
    li {
      width: 320px;
      height: 120px;
      margin-left: 10px;
      .program-box {
        width: 320px;
        height: 120px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 7.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-image: url("~assets/images/program-bg.jpg");
        background-size: cover;
        background-position: 100%;
        position: relative;
        .program-box-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba($color: #000000, $alpha: 0.2);
          border-radius: 7.5px;
        }
        h4 {
          margin: 0;
          padding: 0;
          font-family: IranSansWeb;
          font-weight: lighter;
          font-size: 1.5rem;
          position: relative;
          z-index: 2;
          color: #ffffff;
        }
        .program-info {
          font-family: IranSansWeb;
          font-weight: lighter;
          font-size: 0.75rem;
          margin-top: 15px;
          position: relative;
          z-index: 2;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {};
  },
  props: ["programs"]
};
</script>
