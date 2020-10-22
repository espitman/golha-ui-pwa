var mixin = {
  methods: {
    pageInit () {
      const path = window.location.pathname
      if (path == '/player') {
        this.$nuxt.$emit("player::hide");
      } else {
        this.$nuxt.$emit("player::show");
      }
    }
  }
};

export default mixin;
