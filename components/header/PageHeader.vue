<template>
  <headroom> 
    <header class="page-header" data-canvas>
      <page-header-full />
      <page-header-compact />
    </header>
  </headroom>
</template>
<script>
import {headroom} from 'vue-headroom';
import PageHeaderCompact from '~/components/header/PageHeaderCompact';
import PageHeaderFull from '~/components/header/PageHeaderFull';

export default {
  components: {
    headroom,
    PageHeaderFull,
    PageHeaderCompact,
  },
};
</script>
