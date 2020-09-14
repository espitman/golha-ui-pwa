<template>
  <div class="fullPageLoader">
    <f7-preloader :size="62"></f7-preloader>
    <h6>درحال دریافت اطلاعات...</h6>
  </div>
</template>
<style lang="scss">
.fullPageLoader {
  widows: 100vw;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 15px;
  font-family: IranSansWeb;
  font-weight: lighter;
  font-size: 1.5rem;
}
</style>
