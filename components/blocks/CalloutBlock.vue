<template>
  <article class="block-callout" :class="classOptions" :aria-label="block.calloutBlockHeadline"
  >
       
    <video v-if="image.length && video.length" loop="" muted="" autoplay="" id="bg_video" :poster="image.url">
      <source :src="video.url" type="video/mp4">
    </video>

    <div class="block-callout-content">
      <h3>{{ block.calloutBlockHeadline }}</h3>

      <div class="callout-excerpt" v-html="block.calloutBlockContent"></div>

      <a v-if="block.calloutBlockLink" class="btn btn-primary" :href="block.calloutBlockLink">{{ block.calloutBlockLink }}</a>
    </div>
  </article>
</template>
<script>
// TODO: Fix Callout Link when we have solution for LinkIt field
export default {
  name: "CalloutBlock",
  props: {
    block: { type: Object, required: true }
  },

  data() {
    return {
      classOptions: {
        "light-bg": this.block.calloutBlockBackgroundColor === "light",
        "dark-bg": this.block.calloutBlockBackgroundColor === "dark",
        "bg-image": this.block.calloutBlockBackgroundImage || block.calloutBlockBackgroundVideo,
        "lazyload": this.block.calloutBlockBackgroundImage || block.calloutBlockBackgroundVideo
      },
      image: this.block.calloutBlockBackgroundImage,
      video: this.block.calloutBlockBackgroundVideo
    }
  },

}
</script>