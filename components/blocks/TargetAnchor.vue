<template>
  <div :id="block.targetAnchor" class="anchor"></div>
</template>
<script>
export default {
  name: "TargetAnchor",
  props: {
    block: { type: Object, required: true }
  }
}
</script>