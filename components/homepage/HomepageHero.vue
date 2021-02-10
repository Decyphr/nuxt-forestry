{% for entryHero in entry.hero.all() %}
  {% set heroBackgroundImage = '' %}
  {% set imageSize = { mode: 'crop', width: 1920, height: 865 } %}
  {% set heroBackgroundImage = entryHero.heroImage.one.getUrl(imageSize) %}

  <section class="hero" aria-label="Hero" >
    <div class="hero-background" style="background-image: url('{{ heroBackgroundImage }}');">
    </div>
    <div class="hero-container">
      <div class="hero-callout">
        <h1>{{ entry.title }}</h1>
        <p>
          {{ entryHero.heroExcerpt }}
        </p>
        <div class="buttons">
          <a {{ entryHero.heroButton.getLinkAttributes() }} class="btn btn-primary">{{ entryHero.heroButton.getText() }}</a>
        </div>
      </div>
    </div>
  </section>
{% endfor %}