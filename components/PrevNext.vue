<template>
  <div class="prev-next">
    <nuxt-link v-if="surround[0]" :to="surround[0].path">
      <small>[Prev]</small><br />{{ surround[0].title }}
    </nuxt-link>
    <nuxt-link v-if="surround[1]" :to="surround[1].path">
      <small>[Next]</small><br />{{ surround[1].title }}
    </nuxt-link>
  </div>
</template>
<script>
export default {
  props: {
    surround: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
