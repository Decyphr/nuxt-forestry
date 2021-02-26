<template>
  <div class="container">
    <h1>{{ homepage.title }}</h1>
    <p>{{ homepage.description }}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage').fetch();

    return { homepage };
  },
};
</script>
