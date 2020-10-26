<template>
  <div class="trackPerson">
    <div class="trackPersonBox">
      <div class="personsBox">
        <div class="personBox" v-for="p in track.singer" :key="p._id">
          <Avatar :image="p.image" radius="7.5" />
          <h5>{{ p.name }}</h5>
          <h6>خواننده</h6>
        </div>
        <div class="personBox" v-for="p in track.composer" :key="p._id">
          <Avatar :image="p.image" radius="7.5" />
          <h5>{{ p.name }}</h5>
          <h6>آهنگساز</h6>
        </div>
        <div class="personBox" v-for="p in track.poet" :key="p._id">
          <Avatar :image="p.image" radius="7.5" />
          <h5>{{ p.name }}</h5>
          <h6>شاعر</h6>
        </div>
        <div class="personBox" v-for="p in track.narrator" :key="p._id">
          <Avatar :image="p.image" radius="7.5" />
          <h5>{{ p.name }}</h5>
          <h6>گوینده</h6>
        </div>
        <div class="personBox" v-for="p in musicians" :key="p._id">
          <Avatar :image="p.image" radius="7.5" />
          <h5>{{ p.name }}</h5>
          <h6>{{ p.instrument }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.trackPerson {
  width: 100%;
  .trackPersonBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    .personsBox {
      display: flex;
      flex-wrap: wrap;
      .personBox {
        width: calc(100% / 3 - 10px);
        font-family: IranSansWeb;
        font-weight: 200;
        margin-left: 10px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        float: right;
        &:last-child {
          margin-left: 0;
        }
        .avatar-box {
          width: 100%;
          .avatar-img {
            width: 100%;
          }
          .avatar-no-img {
            width: 100%;
            padding-bottom: 100%;
            margin-bottom: 9px;
            i {
              font-size: 3rem;
              position: absolute;
              top: 30%;
            }
          }
        }
        h5 {
          margin: 0;
          text-align: center;
          font-family: IranSansWeb;
          font-weight: 400;
        }
        h6 {
          margin: 0;
          text-align: center;
          font-family: IranSansWeb;
          font-weight: 200;
          margin-top: 10px;
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
    return { musicians: [] };
  },
  methods: {
    getMusicians() {
      this.track.musicians.map(m => {
        m.persons.map(p => {
          this.musicians.push({ ...p, instrument: m.instrument });
        });
      });
    }
  },
  mounted() {
    this.getMusicians();
  }
};
</script>
