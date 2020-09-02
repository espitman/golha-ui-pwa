<template>
  <div v-if="programs.legth" class="container">
    <h1>{{ programs[0].title }}</h1>
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
    this.programs = (
      await axios.get('https://api.radio-golha.com/api/v1/program')
    ).data.payload.programs
  },
}
</script>

<style></style>
