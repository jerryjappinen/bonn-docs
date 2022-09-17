<script setup>
import { computed, unref } from 'vue'

import { astToHtmlString } from '@graphcms/rich-text-html-renderer'

const props = defineProps({
  content: {
    type: Object,
    default: true
  },

  references: {
    type: Object,
    default: null
  },

  renderers: {
    type: Object,
    default: null
  }
})

const html = computed(() => {
  return astToHtmlString({
    content: props.content,
    references: props.references,

    // https://www.npmjs.com/package/@graphcms/rich-text-react-renderer
    renderers: {
      bold (props) {
        return `<strong>${props.children}</strong>`
      },

      ...(unref(props.renderers) || {})
    }
  })
})
</script>


<template>
  <div
    class="c-rich-text"
    v-html="html"
  />
</template>
