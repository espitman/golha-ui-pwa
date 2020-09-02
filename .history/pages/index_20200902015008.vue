<template>
  <div v-if="programs.length" class="container">
    <ul>
      <li v-for="program in programs" :key="program.id">
        
      </li>
    </ul>
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
