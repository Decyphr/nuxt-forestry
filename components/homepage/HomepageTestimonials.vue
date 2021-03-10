<template>
  <section class="testimonials">
    <div class="container">
      <h2 v-if="testimonials.testimonial_headline">{{ testimonials.testimonial_headline }}</h2>

      <div class="testimonials-carousel">
        <article v-for="testimonial in testimonials" :key="testimonial.title" class="testimonial-item">
          <p>{{ testimonial.pullquote }}</p>
          <cite>
            <span class="name">- {{ testimonial.citation }}</span>
            <span v-if="testimonial.title" class="title">{{ testimonial.title }}</span>
          </cite>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    testimonials: { type: Object, required: true }
  }
}
</script>