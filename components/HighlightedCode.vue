<script setup>
import { computed, unref } from 'vue'

import trim from 'lodash-es/trim'

import highlightCode from 'bonn/util/highlightCode'
import toJson from 'bonn/util/toJson'

const props = defineProps({

  code: {
    type: String,
    required: true
  },

  lang: {
    type: String,
    default: undefined
  },

  jsonify: {
    type: Boolean,
    default: false
  },

  trim: {
    type: Boolean,
    default: null
  }
})

const shouldTrim = computed(() => {
  const trim = unref(props.trim)
  return !!(trim === undefined || trim === null || trim)
})

const stringify = (input) => {
  let value = unref(input)

  if (unref(props.jsonify)) {
    value = toJson(value)
  }

  if (shouldTrim.value) {
    return trim(value)
  }

  return value
}
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <code
    class="c-highlighted-code"
    :data-language="lang"
    v-html="highlightCode(stringify(code))"
  />
</template>
