<template>
  <section class="callout-section" :aria-label="headline">
    <div class="container">
      <h2>{{ headline }}</h2>

      <div class="callouts">
        <div
          v-for="callout in calloutPages"
          :key="callout.id"
          class="callout-column"
        >
          <article class="callout" :aria-label="callout.title">
            <h3>{{ callout.title }}</h3>
            <p>
              {{ callout.excerpt }}
            </p>
            <a
              :href="callout.url"
              class="btn btn-secondary"
              :aria-label="`Learn More about ${callout.title}`"
              >Learn More</a
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
