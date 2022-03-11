<template>
  <div class="w-full">
    <div>
      <h1 class="artTitle pt-4">CORNSPIKE</h1>
      <p class="artBlurb italic">2022, ink, watercolor, and Procreate</p>
      <Lightbox class="pb-4" :images="cornspikeImages" />
      <h1 class="artTitle pt-4">NEST</h1>
      <p class="artBlurb italic">2021, ink, watercolor, and Procreate</p>
      <Lightbox class="pb-4" :images="nestImages" />
      <h1 class="artTitle pt-4">SEGMENTS</h1>
      <p class="artBlurb italic">2021, pencil, ink, and watercolor</p>
      <Lightbox class="pb-4" :images="segmentsImages" />
      <h1 class="artTitle pt-4">FAMILY BUSINESS</h1>
      <p class="artBlurb italic">2020, pencil and ink</p>
      <Lightbox class="pb-4" :images="familyImages" />
      <h1 class="artTitle pt-4">IZUMI</h1>
      <p class="artBlurb italic">2020, pencil and ink</p>
      <Lightbox class="pb-4" :images="izumiImages" />
      <h1 class="artTitle pt-4">BEAR</h1>
      <p class="artBlurb italic">2020, pencil, ink, and watercolor</p>
      <Lightbox class="pb-4" :images="bearImages" />
      <h1 class="artTitle pt-4">BLUEPRINTS</h1>
      <p class="artBlurb italic">2020, Adobe Illustrator</p>
      <Lightbox class="pb-4" :images="blueprintsImages" />
      <h1 class="artTitle pt-4">BODIES</h1>
      <p class="artBlurb italic">2019, pencil and ink</p>
      <Lightbox class="pb-4" :images="bodiesImages" />
      <h1 class="artTitle pt-4">RUTA</h1>
      <p class="artBlurb italic">2019, pencil and ink</p>
      <Lightbox class="pb-4" :images="rutaImages" />
      <h1 class="artTitle pt-4">CUTTING</h1>
      <p class="artBlurb italic">2018, pencil, ink, wash, and screentone</p>
      <Lightbox class="pb-4" :images="cuttingImages" />
      <h1 class="artTitle pt-4">PUBES</h1>
      <p class="artBlurb italic">2018, pencil, ink, and wash</p>
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
        require('~/assets/images/comics/nest/nest_gray_1-Full.webp'),
        require('~/assets/images/comics/nest/nest_gray_2-Full.webp'),
        require('~/assets/images/comics/nest/nest_gray_3-Full.webp'),
        require('~/assets/images/comics/nest/nest_gray_4-Full.webp'),
        require('~/assets/images/comics/nest/nest_gray_5-Full.webp'),
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
    familyImages() {
      return [
        require('~/assets/images/comics/family/family_1-Full.webp'),
        require('~/assets/images/comics/family/family_2-Full.webp'),
        require('~/assets/images/comics/family/family_3-Full.webp'),
        require('~/assets/images/comics/family/family_4-Full.webp'),
        require('~/assets/images/comics/family/family_5-Full.webp'),
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
    blueprintsImages() {
      return [
        require('~/assets/images/comics/blueprints/blueprints_1-Full.webp'),
      ]
    },
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
