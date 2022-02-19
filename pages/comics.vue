<template>
  <div>
    <div>
      <Lightbox :images="images" />
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
    images() {
      return [
        require('~/assets/images/comics/nest/Nest_Cover-Full.webp'),
        require('~/assets/images/comics/nest/Nest_1-Full.webp'),
        require('~/assets/images/comics/nest/Nest_2-Full.webp'),
        require('~/assets/images/comics/nest/Nest_3-Full.webp'),
        require('~/assets/images/comics/nest/Nest_4-Full.webp'),
        require('~/assets/images/comics/nest/Nest_5-Full.webp'),
        require('~/assets/images/comics/nest/Nest_6-Full.webp'),
        require('~/assets/images/comics/nest/Nest_7-Full.webp'),
        require('~/assets/images/comics/nest/Nest_8-Full.webp'),
        require('~/assets/images/comics/nest/Nest_9-Full.webp'),
        require('~/assets/images/comics/nest/Nest_10-Full.webp'),
        require('~/assets/images/comics/nest/Nest_11-Full.webp'),
        require('~/assets/images/comics/nest/Nest_12-Full.webp'),
        require('~/assets/images/comics/nest/Nest_13-Full.webp'),
        require('~/assets/images/comics/nest/Nest_14-Full.webp'),
      ]
    }
  }
}
</script>
