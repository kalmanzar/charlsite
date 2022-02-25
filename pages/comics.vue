<template>
  <div class="w-full">
    <div>
      <h1 class="py-4 font-mondayRush text-2xl">CORNSPIKE</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="cornspikeImages" />
      <h1 class="py-4 font-mondayRush text-2xl">NEST</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="nestImages" />
      <h1 class="py-4 font-mondayRush text-2xl">SEGMENTS</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="segmentsImages" />
      <h1 class="py-4 font-mondayRush text-2xl">IZUMI</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="izumiImages" />
      <h1 class="py-4 font-mondayRush text-2xl">BEAR</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="bearImages" />
      <!-- <h1 class="py-4 font-mondayRush text-2xl">BLUEPRINTS</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="blueprintsImages" /> -->
      <h1 class="py-4 font-mondayRush text-2xl">BODIES</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="bodiesImages" />
      <h1 class="py-4 font-mondayRush text-2xl">RUTA</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="rutaImages" />
      <h1 class="py-4 font-mondayRush text-2xl">CUTTING</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="cuttingImages" />
      <h1 class="py-4 font-mondayRush text-2xl">PUBES</h1>
      <Lightbox class="pb-2" :images="pubesImages" />
    </div>
  </div>
</template>

<script>
import Lightbox from '../components/Lightbox.vue'

export default {
  name: 'Comics',
  components: {
    Lightbox,
  },
  computed: {
    cornspikeImages() {
      return [
        require('~/assets/images/comics/cornspike/cornspike_1-Full.webp'),
        require('~/assets/images/comics/cornspike/cornspike_2-Full.webp'),
        require('~/assets/images/comics/cornspike/cornspike_3-Full.webp'),
        require('~/assets/images/comics/cornspike/cornspike_4-Full.webp'),
        require('~/assets/images/comics/cornspike/cornspike_5-Full.webp'),
      ]
    },
    nestImages() {
      return [
        require('~/assets/images/comics/nest/nest_Cover-Full.webp'),
        require('~/assets/images/comics/nest/nest_1-Full.webp'),
        require('~/assets/images/comics/nest/nest_2-Full.webp'),
        require('~/assets/images/comics/nest/nest_3-Full.webp'),
        require('~/assets/images/comics/nest/nest_4-Full.webp'),
      ]
    },
    segmentsImages() {
      return [
        require('~/assets/images/comics/segments/segments_1-Full.webp'),
        require('~/assets/images/comics/segments/segments_2-Full.webp'),
        require('~/assets/images/comics/segments/segments_3-Full.webp'),
        require('~/assets/images/comics/segments/segments_4-Full.webp'),
        require('~/assets/images/comics/segments/segments_5-Full.webp'),
      ]
    },
    izumiImages() {
      return [
        require('~/assets/images/comics/izumi/izumi_1-Full.webp'),
        require('~/assets/images/comics/izumi/izumi_2-Full.webp'),
        require('~/assets/images/comics/izumi/izumi_3-Full.webp'),
        require('~/assets/images/comics/izumi/izumi_4-Full.webp'),
      ]
    },
    bearImages() {
      return [
        require('~/assets/images/comics/bear/bear_1-Full.webp'),
        require('~/assets/images/comics/bear/bear_2-Full.webp'),
        require('~/assets/images/comics/bear/bear_3-Full.webp'),
        require('~/assets/images/comics/bear/bear_4-Full.webp'),
        require('~/assets/images/comics/bear/bear_5-Full.webp'),
      ]
    },
    // blueprintsImages() {
    //   return [
    //     require('~/assets/images/comics/blueprints/blueprints_1-Full.webp'),
    //     require('~/assets/images/comics/blueprints/blueprints_2-Full.webp'),
    //     require('~/assets/images/comics/blueprints/blueprints_3-Full.webp'),
    //     require('~/assets/images/comics/blueprints/blueprints_4-Full.webp'),
    //     require('~/assets/images/comics/blueprints/blueprints_5-Full.webp'),
    //   ]
    // },
    bodiesImages() {
      return [
        require('~/assets/images/comics/bodies/bodies_1-Full.webp'),
        require('~/assets/images/comics/bodies/bodies_2-Full.webp'),
        require('~/assets/images/comics/bodies/bodies_3-Full.webp'),
        require('~/assets/images/comics/bodies/bodies_4-Full.webp'),
        require('~/assets/images/comics/bodies/bodies_5-Full.webp'),
      ]
    },
    rutaImages() {
      return [
        require('~/assets/images/comics/ruta/ruta_Cover-Full.webp'),
        require('~/assets/images/comics/ruta/ruta_1-Full.webp'),
        require('~/assets/images/comics/ruta/ruta_2-Full.webp'),
        require('~/assets/images/comics/ruta/ruta_3-Full.webp'),
        require('~/assets/images/comics/ruta/ruta_4-Full.webp'),
      ]
    },
    cuttingImages() {
      return [
        require('~/assets/images/comics/cutting/cutting_1-Full.webp'),
        require('~/assets/images/comics/cutting/cutting_2-Full.webp'),
        require('~/assets/images/comics/cutting/cutting_3-Full.webp'),
        require('~/assets/images/comics/cutting/cutting_4-Full.webp'),
        require('~/assets/images/comics/cutting/cutting_5-Full.webp'),
      ]
    },
    pubesImages() {
      return [
        require('~/assets/images/comics/pubes/pubes_1-Full.webp'),
      ]
    },
  }
}
</script>
