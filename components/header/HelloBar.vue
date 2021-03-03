<template>
  <section class="hello-bar" :aria-label="content">
    <div class="container">{{ content }}</div>
  </section>
</template>
<script>
export default {
  props: {
    content: { type: String }
  }
}
</script>
