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
        <v-ons-list>
          <v-ons-list-item
            v-for="page in pages"
            tappable
            modifier="chevron"
            @click="
              currentPage = page
              openSide = false
            "
          >
            <div class="center">{{ page }}</div>
          </v-ons-list-item>
        </v-ons-list>
      </v-ons-page>
    </v-ons-splitter-side>

    <v-ons-splitter-content>
      <component
        :is="currentPage"
        :toggle-menu="() => (openSide = !openSide)"
      ></component>
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
