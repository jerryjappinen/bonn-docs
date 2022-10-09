<script setup>
import trimNewLines from 'bonn/util/trimNewLines'

const string = `



foo


bar     bar



      `
</script>

<template>
  <UtilPage
    name="trimNewLines"
    args="string"
  >
    <p>
      String with copious amounts of whitespace like this
    </p>

    <HighlightedPre :code="string" />

    <p>
      becomes
    </p>

    <HighlightedPre :code="trimNewLines(string)" />
  </UtilPage>
</template>
