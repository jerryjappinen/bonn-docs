<script setup>
import helper from 'bonn/nuxt/head/viewport'

const sampleOptions = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#123abc'
}
</script>

<template>
  <NuxtHeadPage
    name="viewport"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>Add common viewport meta tags and mobile zooming options.</p>

    <Dump :data="helper(sampleOptions)" />
  </NuxtHeadPage>
</template>
