<template>
  <section class="block-featured" :class="bgColor" :aria-label="block.featuredCalloutContentHeadline">
    <div class="block-featured-container">
      <div class="block-featured-intro">
        <h2>{{ block.featuredCalloutContentHeadline }}</h2>
        
        <div v-if="block.featuredCalloutContentExcerpt" v-html="block.featuredCalloutContentExcerpt"></div>
      </div>

      <div class="block-featured-content">
        <div v-for="entry in block.featuredCalloutContentItems" :key="entry.id" class="block-featured-content-column">
          <article class="block-featured-content-item" :aria-label="entry.title">
            <nuxt-link :to="entry.uri">
              <h3>{{ entry.title }}</h3>
              
              <p v-if="entry.excerpt">{{ entry.excerpt }}</p>

              <div class="callout-link">
                Learn More
              </div>
            </nuxt-link>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "FeaturedCalloutContent",
  props: {
    block: { type: Object, required: true }
  },
  data() {
    return {
      bgColor: {
        "light-bg": this.block.featuredCalloutContentBgColor === "light",
        "dark-bg": this.block.featuredCalloutContentBgColor === "dark"
      }
    }
  }
}
</script>