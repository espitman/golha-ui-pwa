<template>
  <div class="horizontalScroller">
    <h3>خواننده‌ها ({{ singers.length }})</h3>
    <div class="scroll">
      <ul class="singers">
        <li v-for="s in singers" :key="s.name">
          <f7-link href="/about" class="singer-box">
            <img v-if="s.image" :src="`https://files.radio-golha.com${s.image}`" />
            <div v-if="!s.image" class="no-img">
              <f7-icon f7="mic"></f7-icon>
            </div>
            <h5>{{ s.name }}</h5>
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
  ul.singers {
    list-style: none;
    display: flex;
    padding: 0;
    li {
      width: 160px;
      margin-left: 10px;
      .singer-box {
        width: 160px;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        background-size: cover;
        background-position: 100%;
        position: relative;
        img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          filter: grayscale(100%);
          border-radius: 7.5px;
        }
        .no-img {
          width: 160px;
          height: 160px;
          border-radius: 7.5px;
          background: rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          i {
            font-size: 7rem;
          }
        }
        h5 {
          color: black;
          margin: 10px 0;
          padding: 0;
          font-family: IranSansWeb;
          font-weight: lighter;
          font-size: 0.85rem;
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
  props: ["singers"]
};
</script>
