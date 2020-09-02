<template>
  <div class="container">
    <h1>SAEED</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      programs: [],
    }
  },
  async fetch() {
    this.programs = await axios.get(
      'https://api.radio-golha.com/api/v1/program'
    )
    console.log(this.programs.data)
  },
}
</script>

<style></style>
