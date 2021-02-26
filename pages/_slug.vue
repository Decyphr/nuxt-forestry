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
  components: { interior },
};
</script>
