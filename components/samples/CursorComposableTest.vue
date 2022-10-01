<script setup>
const cursor = useCursor()
</script>

<template>
  <code class="c-cursor-composable-test">
    [{{ cursor.x }}, {{ cursor.y }}]
  </code>
</template>

<style lang="scss">

.c-cursor-composable-test {
  border-width: 1px;
  @include inline-block;
  @include round;
  @include pad-loose-horizontal;
  @include pad-vertical;
}

</style>
