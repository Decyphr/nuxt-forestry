<template>
  <div class="page-footer-main">
    <div class="container">
      <!--<nav class="footer-nav-primary" aria-label="Footer Primary">
        <ul>
          <nav-core />
        </ul>
      </nav>
-->
      <p>
        <a
          :href="`https://www.google.com/maps/dir/?api=1&origin=&dir_action=navigate&destination=${directionsAddress}`"
          target="_blank"
          rel="noopener"
        >
          {{ identity.address }}, {{ identity.locality }},
          {{ identity.region }}
          {{ identity.zipCode }}
        </a>
      </p>

      <social-icons />
    </div>
  </div>
</template>
<script>
import seoData from '~/content/data/site-settings.json';

import NavCore from '~/components/nav/NavCore';
import SocialIcons from '~/components/SocialIcons';

export default {
  components: {
    NavCore,
    SocialIcons,
  },

  data: () => ({
    identity: {
      address: seoData.identity.address,
      locality: seoData.identity.locality,
      region: seoData.identity.region,
      zipCode: seoData.identity.zip_code,
    }
  }),

  computed: {
    directionsAddress() {
      return (
        this.identity.address +
        ', ' +
        this.identity.locality +
        ', ' +
        this.identity.region +
        ' ' +
        this.identity.zipCode
      );
    },
  },
};
</script>
