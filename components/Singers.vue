<template>
  <div class="singers" :class="{ reverse, center }">
    <span v-if="singers.length > 2" :style="{ color }">{{ current.name }}</span>
    <div v-else>
      <span :style="{ color }" v-for="s in singers" :key="s.id">
        {{ s.name }}
      </span>
    </div>
  </div>
</template>

<style lang="scss">
.singers {
  display: flex;
  flex-direction: row;
  white-space: nowrap;
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
      padding-left: 3px;
      white-space: nowrap;
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
  mounted() {
    this.current = this.singers[this.index];
    this.setCurrent();
  },
  watch: {
    singers: function(newVal, oldVal) {
      this.singers = newVal;
      if (this.singers && this.singers.length > 1) {
        this.setCurrent();
      } else {
        this.index = 0;
        this.current = this.singers[0];
      }
    }
  },
  methods: {
    setCurrent() {
      if (this.singers.length > 1) {
        const self = this;
        clearInterval(this.interval);
        this.interval = setInterval(function() {
          self.index =
            self.index + 1 < self.singers.length ? self.index + 1 : 0;
          self.current = self.singers[self.index];
        }, 3000);
      }
    }
  }
};
</script>
