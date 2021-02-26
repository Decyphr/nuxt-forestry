<template>
  <figure class="block-image" :class="position">

      <nuxt-link v-if="block.imageLink" :to="block.imageLink">
        <img
          :src="block.image[0].url"
          :width="block.image[0].width" 
          :height="block.image[0].height"  
          :alt="block.image[0].title" 
          class="lazyload" 
        />
      </nuxt-link>

      <img v-else
        :src="block.image[0].url"
        :width="block.image[0].width" 
        :height="block.image[0].height"  
        :alt="block.image[0].title" 
        class="lazyload" 
      />

      <figcaption v-if="block.imageCaption">
        <button class="trigger" :class="{'open': isOpen}" aria-label="Show Caption" @click="toggleOpen"></button>

        <div class="caption">
          {{ block.imageCaption }}
        </div>
      </figcaption>
    </figure>
</template>
<script>
export default {
  name: "CaptionedImage",
  props: {
    block: { type: Object, required: true }
  },
  data() {
    return {
      isOpen: false,
      position: {
        "position-left": this.block.imagePosition === "left",
        "position-right": this.block.imagePosition === "right",
        "position-full": this.block.imagePosition === "full",
        "position-center": this.block.imagePosition === "center",
      }
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>