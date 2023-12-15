<script setup>
// import isDev from '../../../bonn/utils/isDev'
// import processExists from '../../../bonn/utils/processExists'
// import processEnvExists from '../../../bonn/utils/processEnvExists'
import toJson from 'bonn/utils/toJson'

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
