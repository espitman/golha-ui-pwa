<template>
  <div>
    <f7-panel right resizable>
      <f7-view>
        <f7-page>
          <f7-block>Left panel content</f7-block>
        </f7-page>
      </f7-view>
    </f7-panel>
    <nuxt />
    <Player />
    <TrackAction />
  </div>
</template>

<style lang="scss">
html,
body {
  font-size: 16px;
  overflow-x: hidden;
}
</style>

<script>
export default {};
</script>
