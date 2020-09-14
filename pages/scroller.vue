<template>
  <f7-page>
    <f7-navbar title="Scroller" backLink="Back"></f7-navbar>
    <div class="main">
      <div class="scroll">
        <ul class="programs">
          <li v-for="index in 10" :key="index">
            <img :src="`https://placeimg.com/200/200/any?${index}`" />
          </li>
        </ul>
      </div>
    </div>
  </f7-page>
</template>

<style lang="scss">
.main {
  padding: 0 10px;
  .scroll {
    overflow-x: auto;
  }
  ul.programs {
    list-style: none;
    display: flex;
    padding: 0;
    li {
      width: 200px;
      height: 200px;
      margin-right: 10px;
    }
  }
}
</style>
<script>
export default {
  mounted() {
    console.log(this.$store.state.todo.list[0].text);
  }
};
</script>
