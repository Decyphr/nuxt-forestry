<template>
  <section class="hero" aria-label="Hero">
    <div
      class="hero-background"
      :style="{ 'background-image': 'url(' + hero.image + ');' }"
    ></div>
    <div class="hero-container">
      <div class="hero-callout">
        <h1>{{ hero.headline }}</h1>
        <p>
          {{ hero.excerpt }}
        </p>
        <div class="buttons">
          <nuxt-link :to="ctaLink" class="btn btn-primary">{{
            hero.button_link.custom_link_text
          }}</nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    hero: { type: Object, required: true },
    cta: { type: Object },
  },

  computed: {
    ctaLink() {
      // if the entry is within the 'pages' section exclude that from route
      return this.cta.path.includes('/pages') ? this.cta.slug : this.cta.path;
    },
  },
};
</script>
