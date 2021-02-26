<template>
  <blockquote class="block-pullquote" :class="position" v-html="block.pullquoteContent">
    <cite v-if="block.pullquoteAttribution">{{ block.pullquoteAttribution }}</cite>
  </blockquote>
</template>
<script>
export default {
  name: "PullquoteBlock",
  props: {
    block: { type: Object, required: true }
  },
  data() {
    return {
      position: {
        "position-left": this.block.pullquotePosition === "left",
        "position-right": this.block.pullquotePosition === "right",
        "position-full": this.block.pullquotePosition === "full",
      }
    }
  }
}
</script>