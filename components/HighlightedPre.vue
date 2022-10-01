<script setup>
const props = defineProps({
  code: {},
  lang: {},
  trim: {},
  file: String
})
</script>

<template>
  <pre class="c-highlighted-pre"><div
    v-if="file"
    class="c-highlighted-pre-file"
  >{{ file }}</div><HighlightedCode
    :code="code"
    :lang="lang"
    :trim="trim"
  /></pre>
</template>

<style lang="scss">

.c-highlighted-pre {
  @include relative;
}

.c-highlighted-pre-file {
  @include discreet;
  @include small-font;
}

</style>
