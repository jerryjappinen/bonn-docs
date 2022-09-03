<script setup>
import getMarkdownIt from 'bonn/util/getMarkdownIt'

const markdownIt = getMarkdownIt()

const md = `## Foo bar

- [x] Get code samples from separate files
- [ ] Add syntax highlighting
- [ ] Add \`NuxtPage\` component


Term 1
: Definition 1

Term 2 with *inline markup*
: Definition 2

  \`{ some code, part of Definition 2 }\`

  Third paragraph of definition 2
`
</script>

<template>
  <div class="page-test">
    <h2>Sandbox page</h2>

    <HighlightedCode lang="markdown">
      {{ md }}
    </HighlightedCode>

    <div v-html="markdownIt.render(md)" />

    <!-- <ParentTestComponent /> -->
  </div>
</template>

<style lang="scss">

.page-test {
  color: v(red);
}

</style>
