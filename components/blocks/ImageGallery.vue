<template>
  <div class="block-gallery">
  <header v-if="block.imageGalleryTitle || block.imageGalleryIntroContent">
    <h2 v-if="block.imageGalleryTitle">{{ block.imageGalleryTitle }}</h2>
    <div v-if="block.imageGalleryIntroContent" v-html="block.imageGalleryIntroContent"></div>
  </header>

<!--
TODO: figure out render error when this is uncommented
  <flickity ref="flickity" :options="flickityOptions" class="carousel" style="height: 480px">
    <div v-for="image in block.imageGalleryImages" :key="image.id" class="carousel-cell">
      <figure class="block-image position-full">
        <img data-flickity-lazyload-srcset=""
          sizes="(min-width: 850px) 1280px, 750px"
          :data-flickity-lazyload-src="image.url"
          :src="image.url"
          :width="image.width"
          :height="image.height"
          :alt="image.title"
        />

        <figcaption v-if="image.caption">
          {{ image.caption }}
        </figcaption>
      </figure>
    </div>
  </flickity>
  -->
</div>
</template>
<script>
export default {
  name: "ImageGallery",
  props: {
    block: { type: Object, required: true }
  },
  data() {
    return {
      flickityOptions: {
        accessiblity: true,
        contain: false,
        prevNextButtons: true,
        lazyLoad: 2,
        pageDots: true,
        wrapAround: true,
        resize: true,
        percentPosition: true,
        cellSelector: '.carousel-cell',
        setGallerySize: true,
        adaptiveHeight: true,
        arrowShape: {
          x0: 10,
          x1: 60, y1: 50,
          x2: 60, y2: 50,
          x3: 60
        }
      }
    }
  }, 

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
}
</script>