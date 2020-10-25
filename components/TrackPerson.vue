<template>
  <div class="trackPerson">
    <h4>{{ title }}</h4>
    <div class="trackPersonBox">
      <div class="personsBox">
        <div class="personBox" v-for="p in persons" :key="p._id">
          <Avatar :image="p.image" size="64" radius="7.5" />
          <h6>{{ p.name }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.trackPerson {
  width: 100%;
  float: right;
  h4 {
    font-family: IranSansWeb;
    font-weight: 300;
    margin-bottom: 10px;
    text-align: right;
  }
  &.half {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h4 {
      width: 100%;
    }
  }
  .trackPersonBox {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    overflow-x: scroll;
    .personsBox {
      display: flex;
      .personBox {
        font-family: IranSansWeb;
        font-weight: 200;
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        &:last-child {
          margin-left: 0;
        }
        .avatar-no-img {
          margin-bottom: 9px;
          i {
            font-size: 3rem;
          }
        }
        h6 {
          margin: 0;
          text-align: center;
          font-family: IranSansWeb;
          font-weight: 200;
        }
      }
    }
  }
}
</style>

<script>
export default {
  props: ["title", "persons"]
};
</script>
