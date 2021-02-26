<template>
  <p>
    <nuxt-link class="btn" :class="buttonStyle" :to="block.buttonLink">{{ block.buttonLabel }}</nuxt-link>
  </p>
</template>
<script>
export default {
  props: {
    block: { type: Object, required: true }
  },

  data() {
    return {
      buttonStyle: {
        "btn-primary": this.block.buttonStyle === "primary",
        "btn-secondary": this.block.buttonStyle === "secondary",
      }
    }
  }
}
</script>