const port = process.env.PORT || 3000,
  dev = process.env.NODE_ENV == "development";

module.exports = {
  telemetry: false,
  dev,
  server: {
    host: "0.0.0.0",
    port,
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - الترجمان",
    title: "الترجمان",
    htmlAttrs: {
      lang: "ar",
      dir: "rtl",
    },
    meta: [{
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      },
      {
        name: "format-detection",
        content: "telephone=no"
      },
      {
        name: "theme-color",
        content: "#122851"
      },
    ],
    link: [{
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico"
    }],
    script: [{
      async: 'async',
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2911925716359981",
      crossorigin: 'anonymous'
    }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/reset.scss",
    "~assets/globals.scss",
    "~assets/_variables.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: dev ?
      `http://localhost:${port}/api` : "https://eltorgoman.herokuapp.com/api",
  },
  auth: {
    strategies: {
      local: {
        tokenType: '',
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'token'
          },
          logout: {
            url: '/auth/logout',
            method: 'delete'
          },
          user: false
        }
      }
    }
  },

  fontawesome: {
    component: 'Fa',
    suffix: false,

    icons: {
      solid: true,
      brands: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};