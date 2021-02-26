<template>
  <div class="block-child-pages">
    <div v-for="page in children" :key="page.id" class="block-child-page-column">
      <article class="block-child-page" :aria-label="page.title">
        <nuxt-link :to="page.uri">
          
          <figure v-if="page.featuredImage != []">
            <img 
            class="lazyload"
            :data-src="page.featuredImage[0].url"
            :src="page.featuredImage[0].url"
            :width="imageSize.width"
            :height="imageSize.height" 
            :alt="page.featuredImage[0].title">
          </figure>
        
          <h3>{{ page.title }}</h3>

          <p v-if="page.excerpt">{{ page.excerpt }}</p>

          <div class="callout-link">Read More</div>
        </nuxt-link>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  name: "ChildPages",
  props: {
    children: { type: Array, required: true },
  },
  data() {
    return {
      imageSize: {
        // if changing this value - Also change the value on the query under ~/apollo/queries/entries/*.gql
        width: 450,
        height: 220
      }
    }
  }
}
</script>