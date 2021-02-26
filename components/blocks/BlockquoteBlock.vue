<template>
  <blockquote class="block-blockquote" :class="position" v-html="block.blockquoteContent">
  </blockquote>
</template>
<script>
export default {
  name: "BlockquoteBlock",
  props: {
    block: { type: Object, required: true }
  },

  data() {
    return {
      position: {
        'position-left': this.block.blockquotePosition === "left",
        'position-right': this.block.blockquotePosition === "right",
        'position-full': this.block.blockquotePosition === "full",
      }
    }
  }
}
</script>