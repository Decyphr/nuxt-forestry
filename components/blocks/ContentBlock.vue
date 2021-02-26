<template>
  <div class="block-content" v-html="block.contentBlock">
  </div>
</template>
<script>
export default {
  name: "ContentBlock",
  props: {
    block: { type: Object, required: true }
  }
}
</script>