<template>
  <div class="flex flex-1 w-full h-full">
    <div v-if="!visible" class="grid comicsGalleryList">
      <a href="#" @click.prevent="show(i)" v-for="(image, i) in images" :key="i">
        <img :src="image" class="imageGalleryItem" />
      </a>
    </div>
    <div class="flex flex-1 fixed top-0 left-0 w-screen h-screen lightbox z-50 justify-center items-center" v-if="visible" @click="hide">
      <div class="flex flex-row w-1/3 h-1/2">
        <div class="flex flex-col flex-1 self-center h-full">
          <div class="self-start text-white cursor-pointer text-4xl pr-8 pb-4" @click.stop="hide">&times;</div>
          <div class="flex flex-1 cursor-pointer self-center items-center py-40 px-8" @click.stop="prev" :class="{'invisible': ! hasPrev()}">
            <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/>
            </svg>
          </div>
        </div>
        <div class="lightbox-image" @click.stop="">
          <img class="w-full h-full object-fill" :src="images[index]">
        </div>
        <div class="flex flex-col flex-1 self-center h-full">
          <div class="self-start text-white cursor-pointer text-4xl pr-4 pb-4">&nbsp;</div>
          <div class="flex flex-1 cursor-pointer self-center items-center py-40 px-8" @click.stop="next" :class="{'invisible': ! hasNext()}">
            <svg class="pointer-events-none self-center" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Lightbox',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      visible: false,
      index: 0,
    };
  },
  methods: {
    show(index) {
      this.visible = true
      this.index = index
    },
    hide() {
      this.visible = false
      this.index = 0
    },
    hasNext() {
      return this.index + 1 < this.images.length
    },
    hasPrev() {
      return this.index - 1 >= 0
    },
    next() {
      if (this.hasNext()) {
        this.index += 1
      }
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case 'ArrowRight':
            this.next();
            break;
          case 'ArrowLeft':
            this.prev();
            break;
          case 'ArrowDown':
          case 'ArrowUp':
          case ' ':
            e.preventDefault();
            break;
          case 'Escape':
            this.hide();
            break;
        }
      }
    },
  },
  mounted() {
    window.addEventListener('keydown', this.onKeydown)
  },
  destroyed() {
    window.removeEventListener('keydown', this.onKeydown)
  },
}
</script>

<style>
.lightbox {
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
}
.lightbox-image img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: calc(100vh - 90px);
}
</style>