<script setup>
const locale = useLocale()
</script>

<template>
  <ComposablePage
    name="locale"
    :props="{
      language: locale.language,
      languages: locale.languages,
      languageFull: locale.languageFull,
      languagesFull: locale.languagesFull
    }"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
