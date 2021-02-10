<section class="testimonials">
  <div class="container">
    {% if entry.testimonialHeadline %}
      <h2>{{ entry.testimonialHeadline }}</h2>
    {% endif %}

    <div class="testimonials-carousel owl-carousel">
      {% for entry in entry.testimonials.all() %}
      <article class="testimonial-item">
        <p>{{ entry.testimonialsPullquote }}</p>
        <cite>
          <span class="name">- {{ entry.testimonialsCitation }}</span>
          {% if entry.testimonialsTitle %}<span class="title">{{ entry.testimonialsTitle }}</span>{% endif %}
      </article>
      {% endfor %}
    </div>
  </div>
</section>