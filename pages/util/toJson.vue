<script setup>
  // import isDev from '../../../bonn/util/isDev'
// import processExists from '../../../bonn/util/processExists'
// import processEnvExists from '../../../bonn/util/processEnvExists'
import toJson from 'bonn/util/toJson'

import { baseUrl, componentPages, utilPages } from '@/config'

const demoData = {
  // isDev: isDev(),
  // processExists: processExists(),
  // processEnvExists: processEnvExists(),
  // env: process.env,
  baseUrl,
  componentPages,
  utilPages
}
</script>

<template>
  <UtilPage
    name="toJson"
    :args="['data', 'trim']"
  >
    <HighlightedPre>toJson(demoData)</HighlightedPre>

    <pre>{{ toJson(demoData) }}</pre>

    <HighlightedPre>toJson(demoData, true)</HighlightedPre>

    <pre>{{ toJson(demoData, true) }}</pre>
  </UtilPage>
</template>
