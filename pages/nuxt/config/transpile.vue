<script setup>
import transpile from 'bonn/nuxt/config/transpile'

const sampleOptions = 'lodash-es'
</script>

<template>
  <NuxtConfigPage
    name="transpile"
    args="...moduleNames"
    :args-sample="sampleOptions"
  >
    <Dump :data="transpile(sampleOptions)" />
  </NuxtConfigPage>
</template>
