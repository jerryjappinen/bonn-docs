<script setup>
const device = useDevice()
</script>

<template>
  <code class="c-pinia-composable-test">
    [{{ device.cursor.x }}, {{ device.cursor.y }}]
  </code>
</template>

<style lang="scss">

.c-pinia-composable-test {
  border-width: 1px;
  @include inline-block;
  @include round;
  @include pad-loose-horizontal;
  @include pad-vertical;
}

</style>
