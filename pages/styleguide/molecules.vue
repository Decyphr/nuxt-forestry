<template>
  <div><h1>Molecules</h1></div>

  <!-- {% extends 'styleguide/_layouts/styleguide' %}
{% set entryTitle = 'Style Guide: Molecules' %}
{% set entry = craft.entries.section('homepage').one() %}

{% block content %}
<div class="container">

  <h1>Molecules</h1>

  <div class="sg-element">
    <h2 class="sg-subheading">Accordions</h2>

    {% include 'styleguide/_includes/blocks/accordion' with { 'headline': 'Block Accordion Style With Some Longer Text' } %}
    {% include 'styleguide/_includes/blocks/accordion' %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Pullquotes</h2>

    {% include 'styleguide/_includes/blocks/pullquote' with { 'position': 'full' } %}
    {% include 'styleguide/_includes/blocks/pullquote' with { 'position': 'left' } %}
    {% include 'styleguide/_includes/blocks/pullquote' with { 'position': 'right' } %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Captioned Images</h2>

    {% include 'styleguide/_includes/blocks/captionedImage' with { 'position': 'full', 'image': 'https://placehold.it/1280x620/', 'caption': false } %}
    {% include 'styleguide/_includes/blocks/captionedImage' with { 'position': 'center', 'image': 'https://placehold.it/900x520/', 'caption': true } %}
    {% include 'styleguide/_includes/blocks/captionedImage' with { 'position': 'left', 'image': 'https://placehold.it/420x420/', 'caption': true } %}
    {% include 'styleguide/_includes/blocks/captionedImage' with { 'position': 'right', 'image': 'https://placehold.it/250x250/', 'caption': false } %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Callout</h2>

    {% include 'styleguide/_includes/blocks/calloutBlock' %}
    {% include 'styleguide/_includes/blocks/calloutBlock' with { 'image': '' } %}
    {% include 'styleguide/_includes/blocks/calloutBlock' with { 'class': 'dark-bg' } %}
    {% include 'styleguide/_includes/blocks/calloutBlock' with { 'class': 'dark-bg', 'image': '' }  %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Rich Content Block</h2>

    {% include 'styleguide/_includes/blocks/richContentBlock' %}
    {% include 'styleguide/_includes/blocks/richContentBlock' with { 'classes': 'dark-bg inverse-order' } %}
    {% include 'styleguide/_includes/blocks/richContentBlock' with { 'classes': 'non-image-block', 'button': 'button' } %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Featured Callout Content</h2>

    {% include 'styleguide/_includes/blocks/featuredCalloutContent' %}
    {% include 'styleguide/_includes/blocks/featuredCalloutContent' with { 'classes': 'dark-bg' } %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Download Callout</h2>

    {% include 'styleguide/_includes/blocks/downloadCallout' %}
    {% include 'styleguide/_includes/blocks/downloadCallout' %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Image Gallery</h2>

    {% include 'styleguide/_includes/blocks/imageGallery' %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Child Pages</h2>

    <div class="block-child-pages">
      {% include 'styleguide/_includes/blocks/childPage' %}
      {% include 'styleguide/_includes/blocks/childPage' %}
      {% include 'styleguide/_includes/blocks/childPage' %}
    </div>
  </div>

  {# <div class="sg-element">
    <h2 class="sg-subheading">Search Results</h2>

    <div class="search-listing">
      {% include 'styleguide/_includes/searchItem' %}
      {% include 'styleguide/_includes/searchItem' %}
    </div>
  </div> #}

  <div class="sg-element">
    <h2 class="sg-subheading">Pagination</h2>

    {% include 'styleguide/_includes/pagination' %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Aux Nav</h2>

    <nav class="header-nav-aux">
      {% include '_includes/nav/aux' %}
    </nav>
  </div>

 {#  <div class="sg-element">
    <h2 class="sg-subheading">Search Form</h2>

    {% include '_includes/searchForm' %}
  </div> #}

  <div class="sg-element">
    <h2 class="sg-subheading">Primary Nav</h2>
    <div>
    <div class="page-header-full">
      <div class="container">
        <nav class="header-nav-primary">
          <ul>
          {% include '_includes/nav/core' with {showChildren: true} %}
          </ul>
        </nav>
      </div>
    </div>
    </div>
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Mobile Primary Nav</h2>

    {% include 'styleguide/_includes/pageHeaderCompact' %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Breadcrumb Nav</h2>

    {% include 'styleguide/_includes/breadcrumbs' %}
  </div>

  <div class="sg-element">
    <h2 class="sg-subheading">Footer Nav</h2>

    <nav class="footer-nav-primary">
      <ul>
      {% include '_includes/nav/core' with {showChildren: false} %}
      </ul>
    </nav>
  </div>

  {# <div class="sg-element">
    <h2 class="sg-subheading">Nav Footer Bottom</h2>

    {% include 'styleguide/_includes/footerBottom' %}
  </div>

</div> #}

{% endblock %}
 -->
</template>
