<template>
  <div class="horizontalScroller">
    <h3>دستگاه / آواز ({{ dastgahs.length }})</h3>
    <div class="scroll">
      <ul class="dastgahs">
        <li v-for="d in dastgahs" :key="d.title">
          <f7-link :href="`/dastgah/${d.title}`" class="dastgah-box">
            <div class="dastgah-box-overlay"></div>
            <h4>{{ d.title }}</h4>
            <div class="dastgah-info">تعداد برنامه: {{ d.count }}</div>
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
    font-size: 1rem ;
  }
  .scroll {
    overflow-x: auto;
  }
  ul.dastgahs {
    list-style: none;
    display: flex;
    padding: 0;
    li {
      width: 320px;
      height: 120px;
      margin-left: 10px;
      .dastgah-box {
        width: 320px;
        height: 120px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 7.5px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-image: url("~assets/images/dastgah-bg.jpg");
        background-size: cover;
        background-position: 100%;
        position: relative;
        .dastgah-box-overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba($color: #000000, $alpha: 0.6);
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
        .dastgah-info {
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
  props: ["dastgahs"]
};
</script>
