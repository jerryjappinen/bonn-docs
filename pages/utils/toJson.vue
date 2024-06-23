<script setup>
import { host, componentPages, utilPages } from '@/config'

const demoData = {
  host,
  componentPages,
  utilPages
}
</script>

<template>
  <UtilPage
    name="toJson"
    :args="['data', 'trim']"
  >
    <HighlightedPre code="toJson(demoData)" />

    <pre>{{ toJson(demoData) }}</pre>

    <HighlightedPre code="toJson(demoData, true)" />

    <pre>{{ toJson(demoData, true) }}</pre>
  </UtilPage>
</template>
