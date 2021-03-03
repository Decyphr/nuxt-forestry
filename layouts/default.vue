<template>
  <div>
    <div class="overlay"><div class="overlay-container"></div></div>
    <hello-bar v-if="globals.displayHelloBar" :content="globals.helloBarContent" />
    <page-header />

    <aside class="off-canvas-slidebar" aria-label="Mobile Navigation">
      <off-canvas />
    </aside>

    <main class="page-main" id="content">
      <Nuxt />
    </main>

    <page-footer />
  </div>
</template>
<script>
import { mapState } from 'vuex';

import HelloBar from '~/components/header/HelloBar';
import OffCanvas from '~/components/header/OffCanvas';
import PageHeader from '~/components/header/PageHeader';
import PageFooter from '~/components/footer/PageFooter';

export default {
  computed: {
    ...mapState(['globals'])
  },
  components: {
    HelloBar,
    OffCanvas,
    PageHeader,
    PageFooter
  }
};
</script>
