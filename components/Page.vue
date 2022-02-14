<template>
  <ul class="flex flex-1 flex-col imageLinkList">
    <nuxt-link to="/comics" class="flex imageLink noSelect aspect-w-7 aspect-h-3 xs:aspect-w-8 xs:aspect-h-2"><img src="~/assets/images/comicsBear.webp" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/story" class="flex imageLink noSelect aspect-w-7 aspect-h-3 xs:aspect-w-8 xs:aspect-h-2"><img src="~/assets/images/storyJackOlive.webp" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/digital" class="flex imageLink noSelect aspect-w-7 aspect-h-3 xs:aspect-w-8 xs:aspect-h-2"><img src="~/assets/images/digitalIllo.webp" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/traditional" class="flex imageLink noSelect aspect-w-7 aspect-h-3 xs:aspect-w-8 xs:aspect-h-2"><img src="~/assets/images/traditionalRunning.webp" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/about" class="flex imageLink noSelect aspect-w-7 aspect-h-3 xs:aspect-w-8 xs:aspect-h-2"><img src="~/assets/images/aboutSelf.webp" class="imageLinkItem" /></nuxt-link>
  </ul>
</template>

<script>

export default {
  name: 'Page',
}
</script>
