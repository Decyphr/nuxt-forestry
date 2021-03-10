<template>
  <section class="callout-section" :aria-label="headline">
    <div class="container">
      <h2>{{ headline }}</h2>

      <div class="callouts">
        <div
          v-for="callout in calloutPages"
          :key="callout.slug"
          class="callout-column"
        >
          <article class="callout" :aria-label="callout.title">
            <h3>{{ callout.title }}</h3>
            <p>
              {{ callout.excerpt }}
            </p>
            <nuxt-link
              :to="`/${callout.slug}`"
              class="btn btn-secondary"
              :aria-label="`Learn More about ${callout.title}`"
              >Learn More</nuxt-link
            >
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    headline: {
      type: String,
      default: () => [],
    },
    calloutPages: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
