<template>
  <ul class="flex flex-1 flex-col imageLinkList">
    <nuxt-link to="/comics" class="flex imageLink noSelect"><img src="~/assets/images/imagelinks/comicsBear-Full.webp" srcset="~/assets/images/imagelinks/comicsBear-420.webp 205w, ~/assets/images/imagelinks/comicsBear-900.webp 384w, ~/assets/images/imagelinks/comicsBear-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/story" class="flex imageLink noSelect"><img src="~/assets/images/imagelinks/storyJackOlive-Full.webp" srcset="~/assets/images/imagelinks/storyJackOlive-420.webp 205w, ~/assets/images/imagelinks/storyJackOlive-900.webp 384w, ~/assets/images/imagelinks/storyJackOlive-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/digital" class="flex imageLink noSelect"><img src="~/assets/images/imagelinks/digitalIllo-Full.webp" srcset="~/assets/images/imagelinks/digitalIllo-420.webp 205w, ~/assets/images/imagelinks/digitalIllo-900.webp 384w, ~/assets/images/imagelinks/digitalIllo-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/traditional" class="flex imageLink noSelect"><img src="~/assets/images/imagelinks/traditionalRunning-Full.webp" srcset="~/assets/images/imagelinks/traditionalRunning-420.webp 205w, ~/assets/images/imagelinks/traditionalRunning-900.webp 384w, ~/assets/images/imagelinks/traditionalRunning-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
    <nuxt-link to="/about" class="flex imageLink noSelect"><img src="~/assets/images/imagelinks/aboutSelf-Full.webp" srcset="~/assets/images/imagelinks/aboutSelf-420.webp 205w, ~/assets/images/imagelinks/aboutSelf-900.webp 384w, ~/assets/images/imagelinks/aboutSelf-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem" /></nuxt-link>
  </ul>
</template>

<script>

export default {
  name: 'Page',
}
</script>
