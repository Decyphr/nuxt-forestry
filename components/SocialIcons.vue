<template>
  <ul class="social-icons">
    <li v-if="facebook.enabled">
      <a class="facebook" :href="facebook.link" :aria-label="facebook.aria_label"
        ><facebook-icon />
      </a>
    </li>
    <li v-if="instagram.enabled">
      <a class="instagram" :href="instagram.link" :aria-label="instagram.aria_label"
        ><instagram-icon />
      </a>
    </li>
    <li v-if="twitter.enabled">
      <a class="twitter" :href="twitter.link" :aria-label="twitter.aria_label"
        ><twitter-icon />
      </a>
    </li>
    <li v-if="youtube.enabled">
      <a class="youtube" :href="youtube.link" :aria-label="youtube.aria_label"
        ><youtube-icon />
      </a>
    </li>
  </ul>
</template>
<script>
import global from "~/content/global/headerFooterContent.json";
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from 'vue-feather-icons';

export default {
  components: {
    FacebookIcon,
    InstagramIcon,
    TwitterIcon,
    YoutubeIcon
  },

  data: () => ({
    facebook: global.social_networks.facebook,
    instagram: global.social_networks.instagram,
    twitter: global.social_networks.twitter,
    youtube: global.social_networks.youtube,
  })
};
</script>
