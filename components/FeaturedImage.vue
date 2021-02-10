<template>
  <section
    class="interior-hero interior-hero-image"
    :style="`background-image: url('${imageUrl}');`"
  >
    <div class="container">
      <h1>{{ title }}</h1>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    imageUrl: { type: String },
    title: { type: String, required: true, default: 'Image' },
  },
};
</script>
