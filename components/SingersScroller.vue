<template>
  <div class="horizontalScroller">
    <h3>خواننده‌ها ({{ singers.length }})</h3>
    <div class="scroll">
      <ul class="singers">
        <li v-for="s in singers" :key="s.name">
          <f7-link :href="`/person/${s._id}/${s.name}`" class="singer-box">
            <Avatar :image="s.image" size="160" radius="7.5" />
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
