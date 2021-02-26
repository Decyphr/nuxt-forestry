<template>
  <footer class="page-footer">
    <footer-navigation />
    <footer-bottom />
  </footer>
</template>
<script>
import FooterNavigation from '~/components/footer/FooterNavigation';
import FooterBottom from '~/components/footer/FooterBottom';

export default {
  components: {
    FooterBottom,
    FooterNavigation,
  },
};
</script>
