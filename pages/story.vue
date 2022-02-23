<template>
  <div>
    <div>
      <h1 class="py-4 font-mondayRush text-2xl">WHEN YOUR PRIVATE JET CRASHES</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="planeImages" :iframes="planeIframes" />
      <h1 class="py-4 font-mondayRush text-2xl">CHARACTER STUDIES</h1>
      <Lightbox class="pb-4 border-b-2 border-pink-300" :images="characterImages" />
      <h1 class="py-4 font-mondayRush text-2xl">STORYBOARDS</h1>
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
