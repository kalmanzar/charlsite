<template>
  <ul class="flex flex-1 flex-col imageLinkList">
    <nuxt-link to="/story" class="flex imageLink noSelect"><img src="/storyJackOlive.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/comics" class="flex imageLink noSelect"><img src="/comicsErythro.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/digital" class="flex imageLink noSelect"><img src="/digitalIllo.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/traditional" class="flex imageLink noSelect"><img src="/traditionalRunning.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/about" class="flex imageLink noSelect"><img src="/aboutSelf.png" class="imageLinkItem" /></nuxt-link>
  </ul>
</template>

<script>

export default {
  name: 'Page',
}
</script>
