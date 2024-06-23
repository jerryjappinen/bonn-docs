<script setup>
const string = `



foo


bar     bar



  `
</script>

<template>
  <UtilPage
    name="trimAllWhitespace"
    args="string"
  >
    <p>
      String with copious amounts of whitespace like this
    </p>

    <HighlightedPre :code="string" />

    <p>
      becomes
    </p>

    <HighlightedPre :code="trimAllWhitespace(string)" />
  </UtilPage>
</template>
