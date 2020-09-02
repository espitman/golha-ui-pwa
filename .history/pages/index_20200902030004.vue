<template id="main">
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable
      width="250px"
      collapse=""
      side="left"
      :open.sync="openSide"
    >
      <v-ons-page>
        <v-ons-button @click="$ons.notification.alert('Hello World!')">
          Click me!
        </v-ons-button>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <v-ons-toolbar>
        <div class="left">
          <v-ons-toolbar-button @click="action">
            <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
          </v-ons-toolbar-button>
        </div>
        <div class="center">Golha</div>
      </v-ons-toolbar>
      <v-ons-page>
        <div v-if="programs.length" class="pt-2">
          <h1>SAEED</h1>
          <div class="p-2">
            <carousel :nav="false" :margin="5" :dots="false">
              <div v-for="(program, index) in programs" :key="index">
                <img :src="`https://placeimg.com/200/200/any?${index}`" />
                <h6 class="text-center my-2">{{ program.title }}</h6>
              </div>
            </carousel>
          </div>
        </div>
      </v-ons-page>
    </v-ons-splitter-content>
  </v-ons-splitter>
</template>

<script>
import axios from 'axios'
import carousel from 'vue-owl-carousel'

export default {
  components: { carousel },
  data() {
    return {
      programs: [],
      openSide: false,
    }
  },
  async fetch() {
    this.programs = (
      await axios.get('https://api.radio-golha.com/api/v1/program')
    ).data.payload.programs
  },
  methods: {
    action() {
      this.openSide = true
    },
  },
}
</script>

<style></style>
