<template>
  <div class="inner-navbar">
    <f7-nav-right> </f7-nav-right>
    <f7-nav-title class="IRANSans">{{ title }}</f7-nav-title>
    <f7-nav-left back-link=""> </f7-nav-left>
  </div>
</template>

<style lang="scss">
.inner-navbar .title {
  font-weight: 400;
  display: flex;
  align-items: center;
}
.inner-navbar .left {
  position: absolute;
  left: 0;
  top: 0;
}
.device-android {
  .inner-navbar .title {
    margin-right: 16px;
  }
}
</style>

<script>
export default {
  props: ["title"]
};
</script>
