<template>
  <div class="container">
    <h1>{{ homepage.title }}</h1>
    <HomepageHero :hero="homepage.hero" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const homepage = await $content('homepage', 'expand-your-reach').fetch();

    return { homepage };
  },
};
</script>
