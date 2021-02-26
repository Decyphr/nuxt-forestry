<template>
  <!-- The equivalent of the "interior" layout within the Craft Base  -->
  <section
    class="interior-container"
    :class="{ 'one-column': !sidebar }"
    aria-label="Content"
  >
    <div :class="{ 'interior-content': sidebar }">
      <slot></slot>
    </div>

    <aside v-if="sidebar" class="interior-aside" aria-label="Sidebar">
      <slot name="sidebar"></slot>
    </aside>
  </section>
</template>
<script>
export default {
  props: {
    sidebar: { type: Boolean, default: false }
  },
};
</script>
