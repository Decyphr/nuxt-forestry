<template>
  <nuxt-link :to="block.downloadCalloutLink" class="block-download-callout">
    <h3>{{ block.downloadCalloutTitle }}</h3>
    
    <p v-if="block.downloadCalloutExcerpt">{{ block.downloadCalloutExcerpt }}</p>
    
    <div class="callout-link">
      {{ block.downloadCalloutLink }}
    </div>
  </nuxt-link>
</template>
<script>
// TODO: Fix Callout Link when we have solution for LinkIt field
export default {
  name: "DownloadCallout",
  props: {
    block: { type: Object, required: true }
  }
}
</script>