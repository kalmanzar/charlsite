<template>
  <div class="flex siteBackground">
    <div class="flex flex-col wrapper">
      <div class="flex flex-1 flex-col card">
        <nuxt-link to="/" class="flex imageLink noSelect"><img src="~/assets/images/title/title-Full.webp" srcset="~/assets/images/title/title-420.webp 220w, ~/assets/images/title/title-900.webp 400w, ~/assets/images/title/title-Full.webp 1300w" sizes="(max-width: 420px) 220px, (max-width: 900px) 400px, (min-width: 901) 1300px" class="titleCardItem" /></nuxt-link>
        <ul class="flex flex-row flex-wrap tabList">
          <li class="flex-auto tabListItem"><nuxt-link to="/comics" class="noSelect">COMICS</nuxt-link></li>
          <li class="flex-auto tabListItem"><nuxt-link to="/story" class="noSelect">STORY</nuxt-link></li>
          <li class="flex-auto tabListItem"><nuxt-link to="/digital" class="noSelect">DIGITAL</nuxt-link></li>
          <li class="flex-auto tabListItem"><nuxt-link to="/traditional" class="noSelect">TRADITIONAL</nuxt-link></li>
          <li class="flex-auto tabListItem"><nuxt-link to="/about" class="noSelect">ABOUT</nuxt-link></li>
          <li class="flex-auto tabListItem"><nuxt-link to="/resume" class="noSelect">RESUME</nuxt-link></li>
        </ul>
        <div class="flex flex-1">
          <Nuxt />
        </div>
        <div>
          <SocialIcons />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>
