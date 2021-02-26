<template>
  <interior>
    <template>
      <h1>{{ newsArticle.title }}</h1>
      <content-blocks :blocks="newsArticle.content_blocks" />
    </template>
  </interior>
</template>
<script>
import interior from '~/layout/interior';
export default {
  async asyncData({ $content, params }) {
    const newsArticle = await $content('news', params.slug).fetch();

    return { newsArticle };
  },
  components: { interior },
};
</script>
