<template>
  <ul class="flex flex-1 flex-col imageLinkList">
    <nuxt-link to="/comics" class="flex imageLink noSelect imageLinkTransitionContainer"><img src="~/assets/images/imagelinks/imageLink_comics-Full.webp" srcset="~/assets/images/imagelinks/imageLink_comics_420.webp 205w, ~/assets/images/imagelinks/imageLink_comics_900.webp 384w, ~/assets/images/imagelinks/imageLink_comics-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem imageLinkTransitionItem" /></nuxt-link>
    <nuxt-link to="/illustration" class="flex imageLink imageLinkTransitionContainer"><img src="~/assets/images/imagelinks/imageLink2_illustration-Full.webp" srcset="~/assets/images/imagelinks/imageLink2_illustration_420.webp 205w, ~/assets/images/imagelinks/imageLink2_illustration_900.webp 384w, ~/assets/images/imagelinks/imageLink2_illustration-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem imageLinkTransitionItem" /></nuxt-link>
    <nuxt-link to="/story" class="flex imageLink noSelect imageLinkTransitionContainer"><img src="~/assets/images/imagelinks/imageLink3_story-Full.webp" srcset="~/assets/images/imagelinks/imageLink3_story_420.webp 205w, ~/assets/images/imagelinks/imageLink3_story_900.webp 384w, ~/assets/images/imagelinks/imageLink3_story-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem imageLinkTransitionItem" /></nuxt-link>
    <nuxt-link to="/resume" class="flex imageLink imageLinkTransitionContainer"><img src="~/assets/images/imagelinks/imageLink4_resume-Full.webp" srcset="~/assets/images/imagelinks/imageLink4_resume_420.webp 205w, ~/assets/images/imagelinks/imageLink4_resume_900.webp 384w, ~/assets/images/imagelinks/imageLink4_resume-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem imageLinkTransitionItem" /></nuxt-link>
    <nuxt-link to="/about" class="flex imageLink imageLinkTransitionContainer"><img src="~/assets/images/imagelinks/imageLink5_about-Full.webp" srcset="~/assets/images/imagelinks/imageLink5_about_420.webp 205w, ~/assets/images/imagelinks/imageLink5_about_900.webp 384w, ~/assets/images/imagelinks/imageLink5_about-Full.webp 1300w" sizes="(max-width: 420px) 205px, (max-width: 900px) 384px, (min-width: 901) 1300px" class="imageLinkItem imageLinkTransitionItem" /></nuxt-link>
  </ul>
</template>

<script>

export default {
  name: 'Page',
}
</script>
