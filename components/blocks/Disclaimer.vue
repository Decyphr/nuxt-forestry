<template>
  <div class="block-disclaimer" v-html="block.disclaimerBlock">
  </div>
</template>
<script>
export default {
  name: "Disclaimer",
  props: {
    block: { type: Object, required: true }
  }
}
</script>