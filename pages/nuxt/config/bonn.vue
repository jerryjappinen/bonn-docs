<script setup>
import bonn from 'bonn/nuxt/config/bonn'

const sampleOptions = {
  components: true,
  composables: true,
  icons: true,
  prefix: 'MyComponentPrefix'
}
</script>

<template>
  <NuxtConfigPage
    name="bonn"
    args="options"
    :args-sample="sampleOptions"
  >
    <Dump :data="bonn(sampleOptions)" />
  </NuxtConfigPage>
</template>
