<template id="main">
  <v-ons-splitter>
    <v-ons-splitter-side
      swipeable
      width="150px"
      collapse=""
      side="left"
      :open.sync="openSide"
    >
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <v-ons-page>

        <v-ons-button @click="$ons.notification.alert('Hello World!')">
          Click me!
        </v-ons-button>
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
