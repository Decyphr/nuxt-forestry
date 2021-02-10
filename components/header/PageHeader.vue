<template>
  <header class="page-header" data-canvas>
    <div class="skip-link"><a href="#content">Skip to Content</a></div>
    <page-header-full />
    <page-header-compact />
  </header>
</template>
<script>
import PageHeaderCompact from '~/components/header/PageHeaderCompact';
import PageHeaderFull from '~/components/header/PageHeaderFull';

export default {
  components: {
    PageHeaderFull,
    PageHeaderCompact,
  },
};
</script>
