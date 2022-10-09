<script setup>
import trimWhitespace from 'bonn/util/trimWhitespace'

const string = `



foo


bar     bar



      `
</script>

<template>
  <UtilPage
    name="trimWhitespace"
    args="string"
  >
    <p>
      String with copious amounts of whitespace like this
    </p>

    <HighlightedPre :code="string" />

    <p>
      becomes
    </p>

    <HighlightedPre :code="trimWhitespace(string)" />
  </UtilPage>
</template>
