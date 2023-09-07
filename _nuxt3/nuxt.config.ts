// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      // 'postcss-import': true,
      // 'tailwindcss/nesting': {},
      // 'postcss-nested': {},
    },
  },
})
