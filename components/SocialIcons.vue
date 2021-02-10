<template>
  <ul class="social-icons">
    <li v-for="sn in socialNetworks" :key="sn.id">
      <a :class="sn.name" href="#" target="_blank"
        ><span :class="`fab fa-${sn.link}`"></span
      ></a>
    </li>
    <li>
      <a class="googleplus" href="#" aria-label="Google Plus"
        ><span class="fab fa-google-plus-g"></span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    // TODO: Add SocialNetworks to Site Info Object in Forestry -> [{name, link}]
    socialNetworks: { type: Array, default: () => [] },
  },
};
</script>
