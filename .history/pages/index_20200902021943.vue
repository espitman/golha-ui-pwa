<template>
  <div v-if="programs.length" class="container">
    <v-ons-page>
      <v-ons-toolbar>
        <div class="center">Title</div>
      </v-ons-toolbar>

      <div class="p-2">
        <carousel :nav="false" :margin="5">
          <div v-for="(program, index) in programs" :key="index">
            <img :src="`https://placeimg.com/200/200/any?${index}`" />
            <h6 class="text-center">{{ program.title }}</h6>
          </div>
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
