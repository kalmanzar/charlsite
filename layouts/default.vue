<template>
  <div class="flex siteBackground">
    <div class="flex flex-col wrapper">
      <div class="flex flex-1 flex-col card">
        <nuxt-link to="/" class="flex imageLink noSelect"><img src="/titleCard.png" class="titleCardItem" /></nuxt-link>
        <ul class="flex flex-row flex-wrap tabList">
          <li class="flex-auto text-center"><nuxt-link to="/story" class="noSelect">story</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/comics" class="noSelect">comics</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/digital" class="noSelect">digital</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/traditional" class="noSelect">traditional</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/about" class="noSelect">about</nuxt-link></li>
        </ul>
        <div class="flex flex-1">
          <Nuxt />
        </div>
      </div>
      <div>
        <SocialIcons />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Default',
}
</script>
