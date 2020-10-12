<template>
  <f7-actions class="actionsTrack">
    <f7-actions-group>
      <f7-actions-button v-on:click="play()">پخش</f7-actions-button>
      <f7-actions-button>افزودن به لیست درحال پخش</f7-actions-button>
      <f7-actions-button color="red">لغو</f7-actions-button>
    </f7-actions-group>
  </f7-actions>
</template>

<style lang="scss">
.actionsTrack {
  .actions-button-text {
    text-align: right;
    font-family: IranSansWeb;
    font-weight: 200;
    color: rgba(0, 0, 0, 0.87);
  }
}
</style>

<script>
export default {
  data() {
    return {};
  },
  mounted: function() {
    this.$nuxt.$on("track::action", track => {
      this.track = track;
      this.$f7.actions.open(".actionsTrack");
    });
  },
  methods: {
    play() {
      this.$nuxt.$emit("track::play", this.track);
    }
  }
};
</script>
