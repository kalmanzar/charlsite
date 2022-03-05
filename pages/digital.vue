<template>
  <div class="w-full">
    <div>
      <h1 class="pt-4 font-mondayRush text-2xl">KAISEN YOGA</h1>
      <p class="pb-4 font-sans"><em>2022, logo and website images</em><br>See them <a href="https://www.kaisenyoga.com/" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="kaisenImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">ENVIRONMENTS</h1>
      <p class="pb-4 font-sans"><em>2021, CCA thesis</em></p>
      <Lightbox class="pb-4" :images="environmentsImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">CREATIVE CRITTERS</h1>
      <p class="pb-4 font-sans"><em>2020, logo and website images</em><br>See them <a href="https://www.creativecritters.org/" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="crittersImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">BOAT LOGO</h1>
      <p class="pb-4 font-sans"><em>2021, sticker design</em><br>I made a boat sticker for a friend, it was fun!</p>
      <Lightbox class="pb-4" :images="boatImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">HEDGEHOG PLUSHIE</h1>
      <p class="pb-4 font-sans"><em>2020, toy design</em></p>
      <Lightbox class="pb-4" :images="hedgehogImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">MAGIC MUSHROOM</h1>
      <p class="pb-4 font-sans"><em>2021, collaboration</em><br>A collaboration with artist Sarah Maloney, look at their stuff <a href="https://linktr.ee/maloneydoodles" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="magicImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">GATOR LEAK &#38; DRAIN</h1>
      <p class="pb-4 font-sans"><em>2021, logo</em><br>My plumber saved my life, so I helped him make a new logo for his business</p>
      <Lightbox class="pb-4" :images="gatorImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">ECLAIRCIE</h1>
      <p class="pb-4 font-sans"><em>2020, album art</em><br>My brother made an incredible album, I made the art. Check out their music <a href="https://hotclubdepai.bandcamp.com/album/claircie" target="_blank"><u>here</u></a></p>
      <Lightbox class="pb-4" :images="eclaircieImages" />
      <h1 class="pt-4 font-mondayRush text-2xl">SELF PORTRAIT</h1>
      <p class="pb-4 font-sans"><em>2020, digital illustration</em><br>My first painting on Procreate</p>
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
  }
}
</script>
