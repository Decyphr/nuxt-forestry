<template>
  <div>
    <HomepageHero :hero="homepage.hero" :cta="ctaLink" />
  </div>
</template>

<script>
import { parseRelatedEntry } from '~/plugins/parseRelatedEntry';

export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage', 'homepage').fetch();
    let ctaLink;

    if (homepage.hero.button_link.link) {
      const link = parseRelatedEntry(homepage.hero.button_link.link);
      ctaLink = await $content(link).fetch();
    }

    return { homepage, ctaLink };
  },
};
</script>
