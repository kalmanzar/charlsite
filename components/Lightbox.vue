<template>
  <div class="flex flex-1 w-full h-full justify-center">
    <div v-if="!visible" class="lightboxGrid">
      <a class="pinkSelect" href="#" @click.prevent="show(i)" v-for="(image, i) in images" :key="image">
        <img class="imageGalleryItem lg:object-scale-down" :src="image" />
      </a>
      <a class="relative" v-for="(iframe, j) in iframes" :key="j">
        <iframe v-if="iframes" class="imageGalleryItem z-10" :width="iframe.width" :height="iframe.height" :src="iframe.src" :title="iframe.title" :frameborder="iframe.frameborder" :allow="iframe.allow"></iframe>
      </a>
    </div>
    <div class="flex lightbox" v-if="visible" @click="hide">
      <div class="flex flex-row">
        <div class="flex cursor-pointer pinkSelect h-64 xxxs:h-80 md:h-88 place-self-center" @click.stop="prev" :class="{'invisible': ! hasPrev()}">
          <svg class="self-center pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/>
          </svg>
        </div>
        <div class="place-self-center" @click.stop="">
          <img class="object-scale-down" :src="images[index]">
        </div>
        <div class="flex cursor-pointer pinkSelect h-64 xxxs:h-80 md:h-88 place-self-center" @click.stop="next" :class="{'invisible': ! hasNext()}">
          <svg class="self-center pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/>
          </svg>
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
    },
    iframes: {
      type: Array,
      required: false
    },
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

<style scoped>
.lightbox {
  background: rgba(0, 0, 0, 0.8);
}
.lightboxGrid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
}
a {
  grid-column: span 2;
}

@media screen and (min-width: 640px) and (max-width: 1023px) {
  /* Two columns */
  .lightboxGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px;
  }
  a {
    grid-column: span 2;
  }
  /* Dealing with single orphan */
  a:last-child:nth-child(2n - 1) {
    grid-column-end: 4;
  }
}

@media screen and (min-width: 1024px) {
  /* Three columns */
  .lightboxGrid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 16px;
  }
  a {
    grid-column: span 2;
  }
  /* Dealing with 2 orphan items */
  a:last-child:nth-child(3n - 1) {
    grid-column-end: -2;
  }
  a:nth-last-child(2):nth-child(3n + 1) {
    grid-column-end: 4;
  }
  /* Dealing with single orphan */
  a:last-child:nth-child(3n - 2) {
    grid-column-end: 5;
  }
}
</style>