module.exports = {
  ssr: false,
  // Nuxt modules
  modules: ["nuxt7", "@nuxtjs/pwa", "@nuxtjs/axios"],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: "رادیو گل‌ها",
    description: ""
  },

  head: {
    // this htmlAttrs you need
    htmlAttrs: {
      dir: "rtl"
    },
    title: "رادیو گل‌ها"
  },

  // Framework7 Config
  framework7: {
    app: {
      view: {
        stackPages: true
      }
    }
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

  plugins: [{ src: "~/plugins/vue2-hammer", ssr: false }],
  // Additional CSS configuration
  css: ["assets/app.scss"]
};
