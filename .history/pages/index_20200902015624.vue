<template>
  <div v-if="programs.length" class="container">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Title</div>
      </v-ons-toolbar>

      <p style="text-align: center">saeed</p>
    </v-ons-page>
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
