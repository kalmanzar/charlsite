<template>
  <div class="w-full">
    <div>
      <h1 class="py-4 font-mondayRush text-2xl">HOGLET</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="hogletImages" />
      <h1 class="py-4 font-mondayRush text-2xl">MATE</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="mateImages" />
      <h1 class="py-4 font-mondayRush text-2xl">BAUGHMAN CENTER</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="baughmanImages" />
      <h1 class="py-4 font-mondayRush text-2xl">JACK AT THE HOUSE</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="jackImages" />
      <h1 class="py-4 font-mondayRush text-2xl">RICK</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="rickImages" />
      <h1 class="py-4 font-mondayRush text-2xl">ROBIN</h1>
      <Lightbox class="pb-2" :images="robinImages" />
      <!-- <h1 class="py-4 font-mondayRush text-2xl">FIGURE DRAWINGS AND GENERAL STUDIES</h1>
      <Lightbox class="pb-2" :images="figureImages" /> -->
    </div>
  </div>
</template>

<script>
import Lightbox from '../components/Lightbox.vue'

export default {
  name: 'Traditional',
  components: {
    Lightbox,
  },
  computed: {
    hogletImages() {
      return [
        require('~/assets/images/traditional/hoglet/hoglet_1-Full.webp'),
        require('~/assets/images/traditional/hoglet/hoglet_2-Full.webp'),
        require('~/assets/images/traditional/hoglet/hoglet_3-Full.webp'),
        require('~/assets/images/traditional/hoglet/hoglet_4-Full.webp'),
        require('~/assets/images/traditional/hoglet/dinner_1-Full.webp'),
        require('~/assets/images/traditional/hoglet/dinner_2-Full.webp'),
        require('~/assets/images/traditional/hoglet/dinner_3-Full.webp'),
        require('~/assets/images/traditional/hoglet/dinner_4-Full.webp'),
        require('~/assets/images/traditional/hoglet/hogletGif.gif'),
        require('~/assets/images/traditional/hoglet/dinnerGif.gif'),
      ]
    },
    mateImages() {
      return [
        require('~/assets/images/traditional/mate/characterBertha-Full.webp'),
      ]
    },
    baughmanImages() {
      return [
        require('~/assets/images/traditional/baughman/imaginaryArch-Full.webp'),
      ]
    },
    jackImages() {
      return [
        require('~/assets/images/traditional/jack/jackHouse-Full.webp'),
      ]
    },
    rickImages() {
      return [
        require('~/assets/images/traditional/rick/rickCover-Full.webp'),
      ]
    },
    robinImages() {
      return [
        require('~/assets/images/traditional/robin/robinPainting-Full.webp'),
      ]
    },
    // figureImages() {
    //   return [
    //     require('~/assets/images/traditional/figures/gatorBW-Full.webp'),
    //     require('~/assets/images/traditional/figures/gatorColor-Full.webp'),
    //   ]
    // },
  }
}
</script>
