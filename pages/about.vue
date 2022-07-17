<template>
  <div class="flex w-full justify-center">
    <div class="flex w-full flex-col">
      <div class="flex flex-1 flex-col lg:flex-row pt-4 break-words LeftAbout">
        <div class="flex flex-col basis-full lg:self-center leftSideAbout">
          <div class="self-center md:w-64 md:h-64 xl:w-80 xl:h-80">
            <img class="object-fill rounded-imageLink" src="~/assets/images/about/bioPic-Full.webp" />
            <div class="text-xs font-centuryGothic italic">
              <p><em>photo taken by Pia Molina</em></p>
            </div>
          </div>
          <div class="text-center hidden lg:text-justify pt-4">
            <h1 class="aboutHeading1">CURRENT AVAILABILITY:</h1>
            <p class="font-centuryGothic">Available for freelance!</p>
            <p><a href="mailto:carlyshoo@gmail.com" target="_blank"><u>carlyshoo@gmail.com</u></a></p>
          </div>
        </div>
        <div class="flex flex-1 flex-col basis-full pt-2 lg:pl-10 lg:pb-2 4xl:justify-evenly rightSideAbout">
          <h1 class="aboutHeading1 text-center">ABOUT ME</h1>
          <p class="text-justify font-centuryGothic pb-2">My name is Carly Shooster (Charly Shoo). I am a Jewish-American comics artist based in swampy Gainesville, Florida making art about women and pain. I&rsquo;m currently exploring motherhood and daughterhood through my graphic novel, <em>Mamita</em>, an extension of my graduate thesis at California College of the Arts.</p>
          <p class="text-justify font-centuryGothic pb-2">I tell stories across comics and other media. I am a graphic designer and digital illustrator, but my favorite thing to do is watercolor my comics pages.</p>
          <p class="text-justify font-centuryGothic pb-2">My work is possible because of my community at <a href="https://www.sequentialartistsworkshop.org/" target="_blank"><u>Sequential Artists Workshop</u></a> (SAW) and my creative friends in Gainesville. When I&rsquo;m not drawing or painting, you can find me walking Ella the Dog with the lovely Jack Edmondson or pulling weeds in my garden. I am addicted to audiobooks, specifically those with meandering sci-fi plots. My favorite comics artists include <a href="https://tezukaosamu.net/en/" target="_blank"><u>Osamu Tezuka</u></a>, <a href="https://en.wikipedia.org/wiki/David_Mazzucchelli" target="_blank"><u>David Mazzucchelli</u></a>, <a href="http://www.tomhart.net/" target="_blank"><u>Tom Hart</u></a>, and <a href="http://www.leelacorman.com/" target="_blank"><u>Leela Corman</u></a>.</p>
          <p class="text-justify font-centuryGothic pb-2"><em>Want to work on a project together?</em> To contact me for a job, collaboration or just to say hello, send me an email: carlyshoo [at] gmail.com</p>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-evenly lg:pt-4 break-words RightAbout">
        <div class="flex-col personalLinks">
          <div class="text-center">
            <h1 class="aboutHeading1">REVIEWS</h1>
            <h2 class="aboutHeading2 text-justify">REVIEW OF SEGMENTS:</h2>
            <p class="text-justify pb-2"><a href="https://members.sawcomics.org/posts/segments-and-some-story-structure" target="_blank"><u>https://members.sawcomics.org/posts/segments-and-some-story-structure</u></a></p>
            <h2 class="aboutHeading2 text-justify">REVIEW OF CUTTING:</h2>
            <p class="text-justify"><a href="https://brooklynrail.org/2021/02/art_books/World-War-3-Illustrateds-Shameless-Feminists?ww3illustrated" target="_blank"><u>https://brooklynrail.org/2021/02/art_books/World-War-3-Illustrateds-Shameless-Feminists</u></a></p>
          </div>
          <div class="text-center pt-4">
            <h1 class="aboutHeading1">WHERE TO READ</h1>
            <h2 class="aboutHeading2 text-justify">RAINESVILLE ANTHOLOGY:</h2>
            <p class="text-justify pb-2"><a href="https://www.sequentialartistsworkshop.org/shop" target="_blank"><u>https://www.sequentialartistsworkshop.org/shop</u></a></p>
            <h2 class="aboutHeading2 text-justify">CUTTING:</h2>
            <p class="text-justify"><a href="https://www.akpress.org/shameless-feminists.html" target="_blank"><u>https://www.akpress.org/shameless-feminists.html</u></a></p>
          </div>
        </div>
        <div class="friendLinks text-justify lg:text-justify pt-2 lg:pt-0 lg:pl-10">
          <h1 class="text-center aboutHeading1">LINKS TO CREATIVE FRIENDS</h1>
          <h2 class="aboutHeading2">Edmondsons</h2>
          <p class="pb-2"><a href="https://edmondson.bandcamp.com/" target="_blank"><u>https://edmondson.bandcamp.com/</u></a></p>
          <h2 class="aboutHeading2">Emma Jensen</h2>
          <p class=""><a href="https://www.emmaleejensen.com/comics-1" target="_blank"><u>https://www.emmaleejensen.com/comics-1</u></a></p>
          <p class=""><a href="https://www.patreon.com/emmaleejensen/posts" target="_blank"><u>https://www.patreon.com/emmaleejensen/posts</u></a></p>
          <p class=""><a href="https://www.instagram.com/emmaleejensen" target="_blank"><u>@emmaleejensen</u></a></p>
          <h2 class="aboutHeading2">Grace Cope</h2>
          <p class=""><a href="https://www.instagram.com/gracecope" target="_blank"><u>@gracecope</u></a></p>
          <h2 class="aboutHeading2">Pia Molina</h2>
          <p class=""><a href="https://www.instagram.com/_piamolina" target="_blank"><u>@_piamolina</u></a></p>
          <h2 class="aboutHeading2">Tif Bucknor</h2>
          <p class=""><a href="https://www.instagram.com/tif_withonef" target="_blank"><u>@tif_withonef</u></a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',
}
</script>
