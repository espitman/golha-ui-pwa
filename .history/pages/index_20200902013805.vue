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
    this.mountains = await fetch('https://api.radio-golha.com/api/v1/program')
    console.log(this.programs)
  },
}
</script>

<style></style>
