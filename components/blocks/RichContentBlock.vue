<template>
  <article class="block-rich-content" :class="classOptions" :aria-label="block.richContentBlockHeadline">
    <div class="block-rich-content-area">
      <h3>{{ block.richContentBlockHeadline }}</h3>
      
      <div v-html="block.richContentBlockExcerpt"></div>
      
        <nuxt-link v-if="image && block.richContentBlockButton" class="btn btn-primary" :to="block.richContentBlockButton">{{ block.richContentBlockButton }}</nuxt-link>
    </div>

    <div class="block-rich-content-change" :class="{'lazyload': image}">
        <nuxt-link v-if="!image" class="btn btn-primary" :to="block.richContentBlockButton">{{ block.richContentBlockButton }}</nuxt-link>
    </div>
    </div>
  </article>
</template>
<script>
//TODO: Figure out background images
export default {
  name: "RichContentBlock",
  props: {
    block: { type: Object, required: true }
  },
  data() {
    return {
      classOptions: {
        "light-bg": this.block.richContentBlockBackgroundColor === "light",
        "dark-bg": this.block.richContentBlockBackgroundColor === "dark",
        "inverse-order": this.block.richContentBlockInverseOrder,
        "non-image-block": this.block.richContentBlockImage,
      },
      image: this.block.richContentBlockImage !== [],
    }
  }
}
</script>