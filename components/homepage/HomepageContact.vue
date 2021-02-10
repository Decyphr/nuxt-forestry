{% if entry.contactCallout|length %}
{% for entry in entry.contactCallout.all() %}
<section class="contact-section dark-bg">
    <div class="container">
      <h2>{{ entry.contactCalloutHeadline }}</h2>
      {{ entry.contactCalloutForm.render() }}
    </div>
  </section>
  {% endfor %}
  {% endif %}