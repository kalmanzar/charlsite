<template>
  <div class="flex w-full justify-center">
    <div class="flex flex-col">
      <div class="flex flex-1">
        <img class="pdfImg" src="~/assets/images/CarlyShoosterResume-Full.webp" />
      </div>
      <a href="/CarlyShoosterResume.pdf" class="pdfBtn" download>DOWNLOAD</a>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Resume',
  head () {
    return {
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    }
  }
}
</script>
