const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'charl',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/faviconInitialsFull.ico' },
      { rel: 'preload', as: 'font', type: 'font/otf', href: '/MondayRush-Regular.otf', crossorigin: true }
    ]
  },

  tailwindcss: {
    config: {
      theme: {
        screens: {
          'xxxxs': '283px',
          'xxxs': '374px',
          'xxs': '389px',
          'xs': '475px',
          ...defaultTheme.screens,
        },
        extend: {
          borderRadius: {
            'imageLink': '4rem',
          },
          colors: {
            'off-white': '#e6e0c8'
          },
          fontFamily: {
            mondayRush: ['MondayRush'],
            centuryGothic: ['CenturyGothic'],
            sans: ['Helvetica', 'Arial', 'sans-serif'],
          },
          screens: {
            '3xl': '1600px',
            '4xl': '2000px',
          },
          spacing: {
            '112': '28rem',
            '128': '32rem',
            '144': '36rem',
            '160': '40rem',
            '176': '44rem',
            '192': '48rem',
            '208': '52rem',
            '224': '56rem',
            '240': '60rem',
            '256': '64rem',
            '272': '68rem',
            '288': '72rem',
            '304': '76rem',
          },
          width: {
            '15/24': '62.5%',
          },
          backgroundImage: theme => ({
            'wallpupper': "url('~/assets/images/wallpupper.webp')",
          })
        }
      },
      plugins: [
        require('@tailwindcss/aspect-ratio'),
      ],
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
