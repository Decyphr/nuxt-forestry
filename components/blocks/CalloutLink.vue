<template>
  <p>
    <nuxt-link class="callout-link" :to="block.calloutLink">{{ block.calloutLink }}</nuxt-link>
  </p>
</template>
<script>
// TODO: Fix Callout Link when we have solution for LinkIt field
export default {
  name: "CalloutLink",
  props: {
    block: { type: Object, required: true }
  }
}
</script>