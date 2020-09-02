<template>
  <div v-if="programs.length" class="container">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Title</div>
      </v-ons-toolbar>

      <div class="p-2">
        <carousel>
          <img src="https://placeimg.com/200/200/any?1" />

          <img src="https://placeimg.com/200/200/any?2" />

          <img src="https://placeimg.com/200/200/any?3" />

          <img src="https://placeimg.com/200/200/any?4" />
        </carousel>
      </div>
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
