<template>
  <div class="container">
    <h1>SAEED</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mountains: [],
    }
  },
  async fetch() {
    this.mountains = await fetch(
      'https://api.nuxtjs.dev/mountains'
    ).then((res) => res.json())
  },
}
</script>

<style></style>
