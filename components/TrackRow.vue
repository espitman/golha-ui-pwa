<template>
  <f7-link :href="`/track/${track._id}`" class="trackRow">
    <div class="inner">
      <img
        class="img"
        :src="`https://files.radio-golha.com${track.singer[0].image}`"
      />
      <div>
        <h4>{{ track.title }}</h4>
        <div class="singers">
          <h6 v-for="s in track.singer" :key="s._id">{{ s.name }}</h6>
        </div>
      </div>
    </div>
  </f7-link>
</template>

<style lang="scss">
.trackRow {
  margin-bottom: 15px;
  background-color: #ffffff;
  padding: 15px;
  display: block;
  overflow: hidden;
  .inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    .img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      filter: grayscale(100%);
      border-radius: 7.5px;
      margin-left: 15px;
    }
    h4 {
      margin: 0;
      padding: 0;
      font-family: IranSansWeb;
      font-weight: 400;
      color: #000000;
    }
    .singers {
      display: flex;
      flex-direction: row;
      h6 {
        margin: 0;
        padding: 0;
        font-family: IranSansWeb;
        font-weight: lighter;
        margin-top: 10px;
        color: #000000;
        &::after {
          content: "،";
          padding-left: 5px;
        }
        &:last-child {
          &::after {
            content: "";
            padding-left: 0;
          }
        }
      }
    }
  }
}
</style>

<script>
export default {
  props: ["track"],
  data() {
    return { loading: true, tracks: [] };
  }
};
</script>
