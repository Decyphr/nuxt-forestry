<template>
  <interior>
    <template>
      <h1>{{ page.title }}</h1>
      <content-blocks :blocks="page.content_blocks" />
    </template>
  </interior>
</template>
<script>
import interior from '~/layout/interior';
export default {
  async asyncData({ $content, params }) {
    const page = await $content('pages', params.slug).fetch();

    return { page };
  },
  head() {
    return {
      title: this.page.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.page.excerpt,
        },
        // Open Graph
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.page.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.page.excerpt,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.page.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.page.excerpt,
        },
      ],
    };
  },
  components: { interior },
};
</script>
