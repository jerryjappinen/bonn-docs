<script setup>
import { computed } from 'vue'

import { astToHtmlString } from '@graphcms/rich-text-html-renderer'

const props = defineProps({
  content: {
    type: Object,
    default: true
  },

  references: {
    type: Object,
    default: null
  }
})

const html = computed(() => {
  return astToHtmlString({
    content: props.content,
    references: props.references,

    renderers: {

      bold (props) {
        return `<strong>${props.children}</strong>`
      },

      Asset: {
        application () {
          return `<div><p>Asset</p></div>`
        },
        text () {
          return `<div><p>Asset text plain</p></div>`
        }
      }
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
