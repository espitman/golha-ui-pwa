<template>
  <div v-if="programs.length" class="container">
    <template id="main">
      <v-ons-splitter>
        <v-ons-splitter-side
          swipeable
          width="150px"
          collapse=""
          side="left"
          :open.sync="openSide"
        >
          <v-ons-page>
            <v-ons-toolbar>
              <div class="center">Title</div>
            </v-ons-toolbar>

            <div class="p-2">
              <carousel :nav="false" :margin="5" :dots="false">
                <div v-for="(program, index) in programs" :key="index">
                  <img :src="`https://placeimg.com/200/200/any?${index}`" />
                  <h6 class="text-center my-2">{{ program.title }}</h6>
                </div>
              </carousel>
            </div>
            <v-ons-button @click="$ons.notification.alert('Hello World!')">
              Click me!
            </v-ons-button>
          </v-ons-page>
        </v-ons-splitter-side>

        <v-ons-splitter-content> </v-ons-splitter-content>
      </v-ons-splitter>
    </template>
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
