<template>
  <ul class="flex flex-1 flex-col imageLinkList">
    <nuxt-link to="/comics" class="flex imageLink noSelect"><img src="~/assets/images/comicsBearFull.webp" srcset="~/assets/images/comicsBear-420.webp 205w, ~/assets/images/comicsBear-900.webp 384w, ~/assets/images/comicsBearFull.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/story" class="flex imageLink noSelect"><img src="~/assets/images/storyJackOliveFull.webp" srcset="~/assets/images/storyJackOlive-420.webp 205w, ~/assets/images/storyJackOlive-900.webp 384w, ~/assets/images/storyJackOliveFull.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/digital" class="flex imageLink noSelect"><img src="~/assets/images/digitalIlloFull.webp" srcset="~/assets/images/digitalIllo-420.webp 205w, ~/assets/images/digitalIllo-900.webp 384w, ~/assets/images/digitalIlloFull.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/traditional" class="flex imageLink noSelect"><img src="~/assets/images/traditionalRunningFull.webp" srcset="~/assets/images/traditionalRunning-420.webp 205w, ~/assets/images/traditionalRunning-900.webp 384w, ~/assets/images/traditionalRunningFull.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/about" class="flex imageLink noSelect"><img src="~/assets/images/aboutSelfFull.webp" srcset="~/assets/images/aboutSelf-420.webp 205w, ~/assets/images/aboutSelf-900.webp 384w, ~/assets/images/aboutSelfFull.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
  </ul>
</template>

<script>

export default {
  name: 'Page',
}
</script>
