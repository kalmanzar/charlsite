<template>
  <div class="w-full">
    <div>
      <h1 class="py-4 font-mondayRush text-2xl">KAISEN YOGA</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="kaisenImages" />
      <h1 class="py-4 font-mondayRush text-2xl">ENVIRONMENTS</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="environmentsImages" />
      <h1 class="py-4 font-mondayRush text-2xl">CREATIVE CRITTERS</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="crittersImages" />
      <h1 class="py-4 font-mondayRush text-2xl">BOAT LOGO</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="boatImages" />
      <h1 class="py-4 font-mondayRush text-2xl">HEDGEHOG PLUSHIE</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="hedgehogImages" />
      <h1 class="py-4 font-mondayRush text-2xl">MAGIC MUSHROOM</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="magicImages" />
      <h1 class="py-4 font-mondayRush text-2xl">GATOR LEAK &#38; DRAIN</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="gatorImages" />
      <h1 class="py-4 font-mondayRush text-2xl">ECLAIRCIE</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="eclaircieImages" />
      <h1 class="py-4 font-mondayRush text-2xl">SELF PORTRAIT</h1>
      <Lightbox class="pb-2" :images="selfImages" />
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
        // require('~/assets/images/digital/boat/boatBW-Full.webp'),
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
  }
}
</script>
