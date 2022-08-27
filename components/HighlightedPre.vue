<script setup>
const props = defineProps({
  code: {},
  lang: {},
  trim: {},
  file: String
})
</script>

<template>
  <pre class="c-highlighted-pre"><HighlightedCode
    :code="code"
    :lang="lang"
    :trim="trim"
  ><span
    v-if="file"
    class="c-highlighted-pre-file"
  >{{ file }}</span><slot /></HighlightedCode></pre>
</template>

<style lang="scss">

.c-highlighted-pre {
  @include relative;
}

.c-highlighted-pre-file {
  @include discreet;
}

</style>
