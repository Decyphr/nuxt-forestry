<template>
  <div class="block-video" :class="position">
    <div class="video-container" v-html="block.embeddedVideoSource">
    </div>
  </div>
</template>
<script>
export default {
  name: "EmbeddedVideo",
  props: {
    block: { type: Object, required: true }
  },
  data() {
    return {
      position: {
        'position-left': this.block.embeddedVideoPosition === "left",
        'position-right': this.block.embeddedVideoPosition === "right",
        'position-full': this.block.embeddedVideoPosition === "full",
      }
    }
  }
}
</script>