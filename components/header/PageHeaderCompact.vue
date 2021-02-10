<template>
  <div class="page-header-compact">
    <div class="page-header-compact-container">
      <div class="header-nav-compact">
        <button
          class="off-canvas-trigger"
          aria-label="Show Menu"
          aria-expanded="false"
        >
          <span class="fa fa-bars"></span>
          <span class="fa fa-times"></span>
          Menu
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Logo from '~/components/Logo';

export default {
  components: {
    Logo,
  },
};
</script>
