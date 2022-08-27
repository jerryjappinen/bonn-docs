<script setup>
import { computed, ref, unref } from 'vue'

import flattenDeep from 'lodash-es/flattenDeep'

import highlightCode from '../../bonn/util/highlightCode'



// Props

const props = defineProps({
  code: [Array, String],
  lang: String,
  trim: {
    type: Boolean,
    default: null
  }
})



// Highlighting

const slotContent = ref(null)

const shouldTrim = computed(() => {
  const trim = unref(props.trim)
  return !!(trim === undefined || trim === null || trim)
})

const trimMeMaybe = (content) => {
  return shouldTrim.value ? content.trim() : content
}

const content = computed(() => {
  const prop = unref(props.code)

  if (prop) {
    return flattenDeep([prop].map((str) => {
      return trimMeMaybe(str)
    }))
  }

  const el = slotContent.value

  return el ? trimMeMaybe(el.textContent) : null
})

const html = computed(() => {
  return content.value ? highlightCode(content.value) : null
})

</script>

<template>
  <code
    :class="{
      'c-highlighted-code-highlighted': !!html
    }"
    class="c-highlighted-code"
  ><span
    v-if="html"
    :data-language="lang"
    class="c-highlighted-code-content c-highlighted-code-content-highlighted"
    v-html="html"
  /><span
    :data-language="lang"
    class="c-highlighted-code-content c-highlighted-code-content-default"
    ref="slotContent"
  ><slot /></span></code>
</template>

<style lang="scss">

.c-highlighted-code-highlighted {
  .c-highlighted-code-content-default {
    @include hide;
  }
}

</style>
