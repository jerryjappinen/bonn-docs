<script setup>
import helper from 'bonn/nuxt/head/coverImage'

const sampleOptions = {
  title: 'Page title used with cover image',
  host: 'https://myapp.com',
  path: 'path/to/cover/image.jpg'
}
</script>

<template>
  <NuxtConfigPage
    name="coverImage"
    args="options"
    :args-sample="sampleOptions"
  >
    <Dump :data="helper(sampleOptions)" />
  </NuxtConfigPage>
</template>
