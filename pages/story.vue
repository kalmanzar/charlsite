<template>
  <div class="w-full">
    <div>
      <h1 class="artTitle py-4">BLUE SUMMER</h1>
      <Lightbox class="pb-4" :images="summerImages" />
      <h1 class="artTitle py-4">WHEN YOUR PRIVATE JET CRASHES</h1>
      <Lightbox class="pb-4" :images="planeImages" :iframes="planeIframes" />
      <h1 class="artTitle py-4">CHARACTER STUDIES</h1>
      <Lightbox class="pb-4" :images="characterImages" />
      <h1 class="artTitle pt-4">PENCILS</h1>
      <p><em>2022, story art</em></p>
      <p class="pb-4">Mamita, Chapter 6: Unfamiliar Ceiling</p>
      <Lightbox class="pb-4" :images="pencilImages" />
      <h1 class="artTitle py-4">STORYBOARDS</h1>
      <Lightbox class="pb-2" :images="storyBoardImages" />
    </div>
  </div>
</template>

<script>
import Lightbox from '../components/Lightbox.vue'

export default {
  name: 'Story',
  components: {
    Lightbox,
  },
  computed: {
    summerImages() {
      return [
        require('~/assets/images/story/blueSummer/eyes_Gif.gif'),
        require('~/assets/images/story/blueSummer/profile_Gif.gif'),
        require('~/assets/images/story/blueSummer/walk_Gif.gif'),
        require('~/assets/images/story/blueSummer/eyes_1-Full.webp'),
        require('~/assets/images/story/blueSummer/profile_2-Full.webp'),
        require('~/assets/images/story/blueSummer/walk_11-Full.webp'),
      ]
    },
    pencilImages() {
      return [
        require('~/assets/images/story/pencil/pencil1-Full.webp'),
        require('~/assets/images/story/pencil/pencil2-Full.webp'),
        require('~/assets/images/story/pencil/pencil3-Full.webp'),
        require('~/assets/images/story/pencil/pencil4-Full.webp'),
        require('~/assets/images/story/pencil/pencil5-Full.webp'),
      ]
    },
    planeImages() {
      return [
        require('~/assets/images/story/planeCrash/jackGif.gif'),
        require('~/assets/images/story/planeCrash/oliveGif.gif'),
        require('~/assets/images/story/planeCrash/jackBackground-Full.webp'),
        require('~/assets/images/story/planeCrash/oliveBackground-Full.webp'),
      ]
    },
    planeIframes() {
      return [
        {
          width: "292",
          height: "164",
          src: "https://www.youtube-nocookie.com/embed/x6rbzpQWiGM?vq=hd1080&modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white",
          title: "YouTube video player",
          frameborder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        }
      ]
    },
    characterImages() {
      return [
        require('~/assets/images/story/characterStudies/characterPepita-Full.webp'),
        require('~/assets/images/story/characterStudies/characterMarquesa-Full.webp'),
      ]
    },
    storyBoardImages() {
      return [
        require('~/assets/images/story/storyBoards/storyBoardRick_1-Full.webp'),
        require('~/assets/images/story/storyBoards/storyBoardRick_2-Full.webp'),
        require('~/assets/images/story/storyBoards/storyBoardRick_3-Full.webp'),
      ]
    },
  }
}
</script>
