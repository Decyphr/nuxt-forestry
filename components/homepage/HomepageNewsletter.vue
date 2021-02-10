{% if entry.newsletter %}
  {% for entry in entry.newsletter.all() %}
  <article class="newsletter">
      <h3>{{ entry.newsletterHeadline }}</h3>
      <p>{{ entry.newsletterExcerpt }}</p>
      {% if entry.newsletterForm %}{{ entry.newsletterForm.render() }}{% endif %}
  </article>
  {% endfor %}
{% endif %}