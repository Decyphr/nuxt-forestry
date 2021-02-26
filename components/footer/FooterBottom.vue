<template>
  <div class="page-footer-bottom">
    <div class="container">
      <nav class="footer-nav-bottom" aria-label="Footer Copyright">
        <ul>
          <li>
            <span
              >&copy; Copyright {{ currentYear }} {{ identity.companyName }}</span
            >
          </li>
          <!--<li v-for="link in globals[1].footerAuxNavigation" :key="link.id"> -->
            <a href="link.navLink">Footer Link</a>
          </li>
          <li>
            <a href="https://clickrain.com" target="_blank" rel="noopener"
              >Site by
              <img
                class="lazyload"
                data-src="/clickrain.svg"
                width="90"
                height="21"
                alt="Click Rain"
            /></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },

  computed: {
    ...mapState(['identity'])
  }
};
</script>
