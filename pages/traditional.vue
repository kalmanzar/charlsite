<template>
  <div class="w-full">
    <div>
      <h1 class="artTitle py-4">HOGLET</h1>
      <Lightbox class="pb-4" :images="hogletImages" />
      <h1 class="artTitle py-4">MATE</h1>
      <Lightbox class="pb-4" :images="mateImages" />
      <h1 class="artTitle py-4">BAUGHMAN CENTER</h1>
      <Lightbox class="pb-4" :images="baughmanImages" />
      <h1 class="artTitle py-4">JACK AT THE HOUSE</h1>
      <Lightbox class="pb-4" :images="jackImages" />
      <h1 class="artTitle py-4">RICK</h1>
      <Lightbox class="pb-4" :images="rickImages" />
      <h1 class="artTitle py-4">ROBIN</h1>
      <Lightbox class="pb-2" :images="robinImages" />
      <h1 class="artTitle py-4">FIGURE DRAWINGS AND GENERAL STUDIES</h1>
      <Lightbox class="pb-2" :images="figureImages" />
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
    figureImages() {
      return [
        require('~/assets/images/traditional/figures/figure_1-Full.webp'),
        require('~/assets/images/traditional/figures/figure_2-Full.webp'),
        require('~/assets/images/traditional/figures/figure_3-Full.webp'),
        require('~/assets/images/traditional/figures/figure_4-Full.webp'),
        require('~/assets/images/traditional/figures/figure_5-Full.webp'),
        require('~/assets/images/traditional/figures/figure_6-Full.webp'),
        require('~/assets/images/traditional/figures/figure_7-Full.webp'),
        require('~/assets/images/traditional/figures/figure_8-Full.webp'),
        require('~/assets/images/traditional/figures/figure_9-Full.webp'),
        require('~/assets/images/traditional/figures/figure_10-Full.webp'),
        require('~/assets/images/traditional/figures/figure_11-Full.webp'),
        require('~/assets/images/traditional/figures/figure_12-Full.webp'),
        require('~/assets/images/traditional/figures/figure_13-Full.webp'),
        require('~/assets/images/traditional/figures/figure_14-Full.webp'),
        require('~/assets/images/traditional/figures/figure_15-Full.webp'),
        require('~/assets/images/traditional/figures/figure_16-Full.webp'),
        require('~/assets/images/traditional/figures/figure_17-Full.webp'),
        require('~/assets/images/traditional/figures/figure_19-Full.webp'),
        require('~/assets/images/traditional/figures/figure_20-Full.webp'),
      ]
    },
  }
}
</script>
