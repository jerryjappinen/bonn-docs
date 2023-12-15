<script setup>
// https://github.com/hmsk/vite-plugin-markdown
import { VueComponent as LibReadme } from 'bonn/README.md'
import { VueComponent as DocsReadme } from '../README.md'
</script>

<template>
  <Bodytext class="prism">
    <LibReadme />
    <DocsReadme />
  </Bodytext>
</template>
