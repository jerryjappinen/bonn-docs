<script setup>
// import { h } from 'vue'
// import PersonBlock from './samples/PersonBlock'

// FIXME: how to use components here?
const renderes = {
  Person ({ slug, title }) {
    // return h(
    //   PersonBlock,
    //   fields,
    //   fields.children
    // )

    return `<div>${title} (${slug})</div>`
  }
}

</script>

<template>
  <HygraphRichText
    class="c-custom-rich-text"
    :renderers="renderes"
  />
</template>
