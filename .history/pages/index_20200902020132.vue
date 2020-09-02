<template>
  <div v-if="programs.length" class="container">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Title</div>
      </v-ons-toolbar>

      <ul>
        <li v-for="program in programs" :key="program.name">
          <h6>{{ program.title }}</h6>
        </li>
      </ul>
      <v-ons-button @click="$ons.notification.alert('Hello World!')">
        Click me!
      </v-ons-button>
    </v-ons-page>
  </div>
</template>

<script>
import axios from 'axios'
import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
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
