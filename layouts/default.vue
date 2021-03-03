<template>
  <div>
    <div class="overlay"><div class="overlay-container"></div></div>
    <hello-bar v-if="displayHelloBar" :content="helloBarContent" />
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
import headerFooterContent from '~/content/global/headerFooterContent.json';

import HelloBar from '~/components/header/HelloBar';
import OffCanvas from '~/components/header/OffCanvas';
import PageHeader from '~/components/header/PageHeader';
import PageFooter from '~/components/footer/PageFooter';

export default {
  components: {
    HelloBar,
    OffCanvas,
    PageHeader,
    PageFooter
  },

  data: () => ({
    displayHelloBar: headerFooterContent.display_hello_bar,
    helloBarContent: headerFooterContent.hello_bar_content
  })
};
</script>
