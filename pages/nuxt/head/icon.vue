<script setup>
import helper from 'bonn/nuxt/head/icon'

const sampleOptions = {
  favicon: 'favicon.svg', // or `true`
  faviconIco: 'favicon.ico', // or `true`
  appleTouchIcon: 'apple-touch-icon.png', // or `true`
  maskIcon: 'mask-icon.svg', // or `true`
  maskIconColor: '#000'
}
</script>

<template>
  <NuxtConfigPage
    name="icon"
    args="options"
    :args-sample="sampleOptions"
  >
    <Dump :data="helper(sampleOptions)" />
  </NuxtConfigPage>
</template>
