<template>
  <!-- The equivalent of the "interior" layout within the Craft Base  -->
  <section class="interior">
    <featured-image title="Boom" imageUrl="https://picsum.photos/1920/800" />

    <div class="interior-container container">
      <breadcrumbs />

      <slot v-if="$slots.sidebar" name="interiorContent"></slot>

      <div v-else class="interior-content">
        <div class="interior-content-container">
          <slot name="interior"></slot>
        </div>
      </div>

      <aside class="interior-aside">
        <slot name="sidebar"></slot>
      </aside>
    </div>
  </section>
</template>
<script>
import Breadcrumbs from '~/components/Breadcrumbs';
import FeaturedImage from '~/components/FeaturedImage';

export default {
  components: { Breadcrumbs, FeaturedImage },
};
</script>
