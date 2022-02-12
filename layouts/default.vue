<template>
  <div class="flex siteBackground">
    <div class="flex flex-col wrapper">
      <div class="flex flex-1 flex-col card">
        <nuxt-link to="/" class="flex imageLink noSelect"><img src="/titleCard.png" class="titleCardItem" /></nuxt-link>
        <ul class="flex flex-row flex-wrap tabList">
          <li class="flex-auto text-center"><nuxt-link to="/story" class="font-mondayRush noSelect">STORY</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/comics" class="font-mondayRush noSelect">comics</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/digital" class="font-mondayRush noSelect">DIGITAL</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/traditional" class="font-mondayRush noSelect">traditional</nuxt-link></li>
          <li class="flex-auto text-center"><nuxt-link to="/about" class="font-mondayRush noSelect">ABOUT</nuxt-link></li>
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
