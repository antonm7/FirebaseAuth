export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fire-auth',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/global.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxt/typescript-build'],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCSoa9n6cBCdQn5ToDbKsRjeYjsVWZguuc",
          authDomain: "fir-auth-7c3f0.firebaseapp.com",
          projectId: "fir-auth-7c3f0",
          storageBucket: "fir-auth-7c3f0.appspot.com",
          messagingSenderId: "537499087471",
          appId: "1:537499087471:web:368a6fd0e1aa2e7c5e139a",
          measurementId: "G-R9MM4002ZX"
        },
        services: {
          auth: true 
        }
      }
    ]
  ],

  router: {
    middleware: 'routerAuth'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
