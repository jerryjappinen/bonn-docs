<script setup>
// import isDev from '../../../bonn/util/isDev'
// import processExists from '../../../bonn/util/processExists'
// import processEnvExists from '../../../bonn/util/processEnvExists'
import toJson from 'bonn/util/toJson'

import { host, componentPages, utilPages } from '@/config'

const demoData = {
  // isDev: isDev(),
  // processExists: processExists(),
  // processEnvExists: processEnvExists(),
  // env: process.env,
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
