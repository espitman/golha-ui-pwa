module.exports = {
  // Nuxt modules
  modules: ["nuxt7", "@nuxtjs/pwa", "@nuxtjs/axios"],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: "my-nuxt7",
    description: ""
  },

  head: {
    // this htmlAttrs you need
    htmlAttrs: {
      dir: "rtl"
    },
    title: "Nuxt PWA"
  },

  // Framework7 Config
  framework7: {
    // ...
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend(config) {
      // ...
    }
  },
  components: true,

  // Additional CSS configuration
  css: ["assets/app.scss"]
};
