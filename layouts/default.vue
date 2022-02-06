<template>
  <div class="flex siteBackground">
    <div class="flex flex-col wrapper">
      <div class="flex flex-1 flex-col card">
        <nuxt-link to="/" class="flex imageLink"><img src="/titleCard.png" class="titleCardItem" /></nuxt-link>
        <ul class="flex flex-row flex-wrap tabList">
          <li class="flex-auto text-center"><nuxt-link to="/story">story</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/comics">comics</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/digital">digital</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/traditional">traditional</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/about">about</nuxt-link></li>
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
