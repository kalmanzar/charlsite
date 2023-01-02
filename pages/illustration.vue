<template>
  <div class="w-full">
    <div class="font-centuryGothic">
      <h1 class="artTitle pt-4">KAISEN YOGA</h1>
      <p><em>2022, logo and website images</em></p>
      <p class="pb-4">See them <a href="https://www.kaisenyoga.com/" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="kaisenImages" />
      <h1 class="artTitle pt-4">ENVIRONMENTS</h1>
      <p class="pb-4"><em>2021, CCA thesis</em></p>
      <Lightbox class="pb-4" :images="environmentsImages" />
      <h1 class="artTitle pt-4">CREATIVE CRITTERS</h1>
      <p><em>2020, logo and website images</em></p>
      <p class="pb-4">See them <a href="https://www.creativecritters.org/" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="crittersImages" />
      <h1 class="artTitle pt-4">BOAT LOGO</h1>
      <p><em>2021, sticker design</em></p>
      <p class="pb-4">I made a boat sticker for a friend, it was fun!</p>
      <Lightbox class="pb-4" :images="boatImages" />
      <h1 class="artTitle pt-4">HEDGEHOG PLUSHIE</h1>
      <p class="pb-4"><em>2020, toy design</em></p>
      <Lightbox class="pb-4" :images="hedgehogImages" />
      <h1 class="artTitle pt-4">MAGIC MUSHROOM</h1>
      <p><em>2021, collaboration</em></p>
      <p class="pb-4">A collaboration with artist Sarah Maloney, look at their stuff <a href="https://linktr.ee/maloneydoodles" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="magicImages" />
      <h1 class="artTitle pt-4">GATOR LEAK &#38; DRAIN</h1>
      <p><em>2021, logo</em></p>
      <p class="pb-4">My plumber saved my life, so I helped him make a new logo for his business</p>
      <Lightbox class="pb-4" :images="gatorImages" />
      <h1 class="artTitle pt-4">ECLAIRCIE</h1>
      <p><em>2020, album art</em></p>
      <p class="pb-4">My brother made an incredible album, I made the art. Check out their music <a href="https://hotclubdepai.bandcamp.com/album/claircie" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="eclaircieImages" />
      <h1 class="artTitle pt-4">SELF PORTRAIT</h1>
      <p><em>2020, digital illustration</em></p>
      <p class="pb-4">My first painting on Procreate</p>
      <Lightbox class="pb-4" :images="selfImages" />
      <h1 class="artTitle pt-4">HOGLET</h1>
      <Lightbox class="pb-4" :images="hogletImages" />
      <h1 class="artTitle pt-4">MATE</h1>
      <Lightbox class="pb-4" :images="mateImages" />
      <h1 class="artTitle pt-4">BAUGHMAN CENTER</h1>
      <Lightbox class="pb-4" :images="baughmanImages" />
      <h1 class="artTitle pt-4">JACK AT THE HOUSE</h1>
      <Lightbox class="pb-4" :images="jackImages" />
      <h1 class="artTitle pt-4">RICK</h1>
      <Lightbox class="pb-4" :images="rickImages" />
      <h1 class="artTitle pt-4">ROBIN</h1>
      <Lightbox class="pb-2" :images="robinImages" />
      <h1 class="artTitle pt-4">FIGURE DRAWINGS AND GENERAL STUDIES</h1>
      <Lightbox class="pb-2" :images="figureImages" />
    </div>
  </div>
</template>

<script>
import Lightbox from '../components/Lightbox.vue'

export default {
  name: 'Digital',
  components: {
    Lightbox,
  },
  computed: {
    kaisenImages() {
      return [
        require('~/assets/images/digital/kaisen/meditation-Full.webp'),
        require('~/assets/images/digital/kaisen/treePose-Full.webp'),
        require('~/assets/images/digital/kaisen/crowPose-Full.webp'),
        require('~/assets/images/digital/kaisen/downwardDog-Full.webp'),
        require('~/assets/images/digital/kaisen/yoga_1-Full.webp'),
        require('~/assets/images/digital/kaisen/yoga_2-Full.webp'),
        require('~/assets/images/digital/kaisen/kaisen_1-Full.webp'),
        require('~/assets/images/digital/kaisen/kaisen_2-Full.webp'),
        require('~/assets/images/digital/kaisen/kaisen_3-Full.webp'),
        require('~/assets/images/digital/kaisen/kaisen_4-Full.webp'),
      ]
    },
    environmentsImages() {
      return [
        require('~/assets/images/digital/environments/marquesaBalcony-Full.webp'),
        require('~/assets/images/digital/environments/berthasKitchen-Full.webp'),
        require('~/assets/images/digital/environments/dianeNursery-Full.webp'),
        require('~/assets/images/digital/environments/jannaSpringSadness-Full.webp'),
      ]
    },
    crittersImages() {
      return [
        require('~/assets/images/digital/critters/scout_1-Full.webp'),
        require('~/assets/images/digital/critters/scout_2-Full.webp'),
        require('~/assets/images/digital/critters/creativeCrittersText-Full.webp'),
        require('~/assets/images/digital/critters/creativeCritters-Full.webp'),
      ]
    },
    boatImages() {
      return [
        require('~/assets/images/digital/boat/boatBW-Full.webp'),
        require('~/assets/images/digital/boat/boatColor-Full.webp'),
      ]
    },
    hedgehogImages() {
      return [
        require('~/assets/images/digital/hedgehog/toyDesign-Full.webp'),
      ]
    },
    magicImages() {
      return [
        require('~/assets/images/digital/magic/magicMushrooms-Full.webp'),
      ]
    },
    gatorImages() {
      return [
        require('~/assets/images/digital/gator/gatorBW-Full.webp'),
        require('~/assets/images/digital/gator/gatorColor-Full.webp'),
      ]
    },
    eclaircieImages() {
      return [
        require('~/assets/images/digital/eclaircie/eclaircie-Full.webp'),
      ]
    },
    selfImages() {
      return [
        require('~/assets/images/digital/self/self-Full.webp'),
      ]
    },
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
