<template>
  <div>
    <!--
  {% set calloutBlockImageSizeLg = { mode: 'crop', width: 1450, height: 600 } %}
  {% set calloutBlockImageSizeMd = { mode: 'crop', width: 1100, height: 500 } %}
  {% set calloutBlockImageSizeSm = { mode: 'crop', width: 500, height: 400 } %}
  {% set calloutBlockImageSizeLq = { mode: 'crop', width: 50, height: 35 } %}

  {% set imageFullSize = { mode: 'fit', width: 1280, height: 800 } %}
  {% set imageFullSizeMobile = { mode: 'fit', width: 750, height: 480 } %}
  {% set imageFullSizeLq = { mode: 'fit', width: 50, height: 32 } %}
  {% set imageCenterSize = { mode: 'fit', width: 1024, height: 655 } %}
  {% set imageCenterSizeMobile = { mode: 'fit', width: 750, height: 500 } %}
  {% set imageDefaultSize = { mode: 'fit', width: 420, height: 650 } %}

  {% set imageGallerySizeDesktop = { mode: 'crop', width: 1080, height: 490 } %}
  {% set imageGallerySizeMobile = { mode: 'crop', width: 550, height: 250 } %}
  {% set imageGallerySizeLq = { mode: 'crop', width: 50, height: 23 } %}

  {% set richContentImageSize = { mode: 'fit', width: 500, height: 800 } %}

  {% set blocks = entry.entryContent
    .with([
      ['image:image', {
        withTransforms: [
          imageFullSize,
          imageFullSizeMobile,
          imageFullSizeLq,
          imageCenterSize,
          imageCenterSizeMobile,
          imageDefaultSize
        ]
      }],
      ['imageGallery:imageGalleryImages', {
        withTransforms: [
          imageGallerySizeDesktop,
          imageGallerySizeMobile,
          imageGallerySizeLq
        ]
      }],
      'calloutBlock:calloutBlockBackgroundVideo',
      ['calloutBlock:calloutBlockBackgroundImage', {
        withTransforms: [
          calloutBlockImageSizeLg,
          calloutBlockImageSizeMd,
          calloutBlockImageSizeSm,
          calloutBlockImageSizeLq
        ]
      }],
      'featuredCalloutContent:featuredCalloutContentItems',
      ['richContentBlock:richContentBlockImage', {
        withTransforms: [
          richContentImageSize
        ]
      }]
      ])
    .all() %}
    -->

    <div v-for="(block, idx) in blocks" :key="`block-${idx}`">
      <accordion v-if="block.block_type === 'accordion'" :block="block" />

      <blockquote-block
        v-else-if="block.block_type === 'blockquote'"
        :block="block"
      />

      <button-block v-else-if="block.block_type === 'button'" :block="block" />

      <callout-block
        v-else-if="block.block_type === 'calloutBlock'"
        :block="block"
      />

      <callout-link
        v-else-if="block.block_type === 'calloutLink'"
        :block="block"
      />

      <captioned-image
        v-else-if="block.block_type === 'image' && block.image"
        :block="block"
      />

      <child-pages
        v-else-if="
          block.block_type === 'showChildPages' &&
          block.showChildPages &&
          childPages
        "
        :children="childPages"
      />

      <content-block
        v-else-if="block.block_type === 'contentBlock'"
        :block="block"
      />

      <div
        v-else-if="block.block_type === 'customCode'"
        v-html="block.customCode"
      ></div>

      <disclaimer
        v-else-if="block.block_type === 'disclaimer'"
        :block="block"
      />

      <download-callout
        v-else-if="block.block_type === 'downloadCallout'"
        :block="block"
      />

      <embedded-video
        v-else-if="block.block_type === 'embeddedVideo'"
        :block="block"
      />

      <featured-callout-content
        v-else-if="block.block_type === 'featuredCalloutContent'"
        :block="block"
      />

      <image-gallery
        v-else-if="block.block_type === 'imageGallery'"
        :block="block"
      />

      <person-list
        v-else-if="block.block_type === 'personList'"
        :block="block"
      />

      <pullquote-block
        v-else-if="block.block_type === 'pullquote'"
        :block="block"
      />

      <rich-content-block
        v-else-if="block.block_type === 'richContentBlock'"
        :block="block"
      />

      <target-anchor
        v-else-if="block.block_type === 'targetAnchor'"
        :block="block"
      />

      <!--
TODO: Figure out forms
      {% case "form" %}
        {% include '_includes/blocks/form' with { 'block': block } %}
-->
    </div>
  </div>
</template>
<script>
import Accordion from '~/components/blocks/Accordion';
import BlockquoteBlock from '~/components/blocks/BlockquoteBlock';
import ButtonBlock from '~/components/blocks/ButtonBlock';
import CalloutBlock from '~/components/blocks/CalloutBlock';
import CalloutLink from '~/components/blocks/CalloutLink';
import CaptionedImage from '~/components/blocks/CaptionedImage';
import ChildPages from '~/components/blocks/ChildPages';
import ContentBlock from '~/components/blocks/ContentBlock';
import Disclaimer from '~/components/blocks/Disclaimer';
import DownloadCallout from '~/components/blocks/DownloadCallout';
import EmbeddedVideo from '~/components/blocks/EmbeddedVideo';
import FeaturedCalloutContent from '~/components/blocks/FeaturedCalloutContent';
import ImageGallery from '~/components/blocks/ImageGallery';
import PersonList from '~/components/blocks/PersonList';
import PullquoteBlock from '~/components/blocks/PullquoteBlock';
import RichContentBlock from '~/components/blocks/RichContentBlock';
import TargetAnchor from '~/components/blocks/TargetAnchor';

export default {
  components: {
    Accordion,
    BlockquoteBlock,
    ButtonBlock,
    CalloutBlock,
    CalloutLink,
    CaptionedImage,
    ChildPages,
    ContentBlock,
    Disclaimer,
    DownloadCallout,
    EmbeddedVideo,
    FeaturedCalloutContent,
    ImageGallery,
    PersonList,
    PullquoteBlock,
    RichContentBlock,
    TargetAnchor,
  },
  props: {
    blocks: { type: Array, default: () => [] },
    childPages: { type: Array, default: () => [] },
  },
};
</script>
