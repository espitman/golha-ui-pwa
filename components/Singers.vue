<template>
  <div class="singers" :class="{ reverse, center }">
    <span :style="{ color }">{{ current.name }}</span>
  </div>
</template>

<style lang="scss">
.singers {
  display: flex;
  flex-direction: row;
  &.reverse {
    flex-direction: row-reverse;
  }
  &.center {
    justify-content: center;
  }
  span {
    margin: 0;
    padding: 0;
    font-family: IranSansWeb;
    font-weight: lighter;
    margin-top: 10px;
    font-size: 0.75rem;
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
</style>

<script>
export default {
  props: ["singers", "color", "reverse", "center"],
  data() {
    return {
      index: 0,
      current: {}
    };
  },
  fetch() {
    this.current = this.singers[this.index];
  },
  mounted() {
    this.setCurrent();
  },
  methods: {
    setCurrent() {
      if (this.singers.length > 1) {
        const self = this;
        setInterval(function() {
          self.index =
            self.index + 1 < self.singers.length ? self.index + 1 : 0;
          self.current = self.singers[self.index];
        }, 3000);
      }
    }
  }
};
</script>
