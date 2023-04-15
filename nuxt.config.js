import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - crawlingInsp',
    title: 'crawlingInsp',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next',
  ],

  auth: {
    redirect: {
      login: '/login',
      logout: '/login',
    },
    strategies: {
      local: {
        token: {
          property: 'user.access_key',
          global: true,
          maxAge: 1800,
        },
        refreshToken: {
          property: 'user.refresh_key',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30,
        },
        endpoints: {
          login: {
            url: 'http://havememo.ddns.net:8082/api/login',
            method: 'post',
            propertyName: 'user.access_key',
          },
          logout: {
            url: 'http://havememo.ddns.net:8082/api/logout',
            method: 'delete',
          },
          user: {
            url: 'http://havememo.ddns.net:8082/getUser',
            method: 'get',
            propertyName: 'user',
          },
          refresh: {
            url: 'http://havememo.ddns.net:8082/extraKeys',
            method: 'get',
          },
        },
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  router: {
    base: '/',
  },
  target: 'static',

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: false,
  },
}
