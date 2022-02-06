<template>
  <ul class="flex flex-1 flex-col imageLinkList">
    <nuxt-link to="/story" class="flex imageLink"><img src="/storyOlive.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/comics" class="flex imageLink"><img src="/comicsErythro.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/digital" class="flex imageLink"><img src="/digitalIllo.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/traditional" class="flex imageLink"><img src="/traditionalRunning.png" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/about" class="flex imageLink"><img src="/aboutSelf.png" class="imageLinkItem" /></nuxt-link>
  </ul>
</template>

<script>

export default {
  name: 'Page',
}
</script>
