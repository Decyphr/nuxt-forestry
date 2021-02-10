<template>
  <div class="page-header-full">
    <div class="container">
      <div><Logo /></div>
      <nav class="header-nav-primary" aria-label="Primary">
        <nav-core />
      </nav>

      <div class="header-aux">
        <nav class="header-nav-aux" aria-label="Auxilary">
          <social-icons />
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo';
import NavCore from '~/components/nav/NavCore.vue';
import SocialIcons from '~/components/SocialIcons';

export default {
  components: {
    Logo,
    NavCore,
    SocialIcons,
  },
};
</script>
