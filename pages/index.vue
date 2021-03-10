<template>
  <div>
    <HomepageHero :hero="homepage.hero" :cta="ctaLink" />
    <HomepageCallouts :headline="homepage.callouts.headline" :calloutPages="calloutPages" />
    <HomepageTestimonials :testimonials="homepage.testimonials" />
  </div>
</template>

<script>
import { parseRelatedEntry } from '~/plugins/parseRelatedEntry';

export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage', 'homepage').fetch();
    let ctaLink = "";
    let calloutPages = [];

    // fetch CTA page
    if (homepage.hero.button_link.link) {
      const path = parseRelatedEntry(homepage.hero.button_link.link);
      ctaLink = await $content(path).fetch();
    }

    // fetch callout page entries
    if (homepage.callouts.callout_pages) {
      homepage.callouts.callout_pages.forEach(async({pages}) => {
        const path = parseRelatedEntry(pages);
        let entry = await $content(path).fetch();
        calloutPages.push(entry);
      })
    } 

    return { homepage, ctaLink, calloutPages };
  },
};
</script>
