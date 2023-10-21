<script setup>
import prod from 'bonn/nuxt/config/prod'

const sampleOptions = {
  app: {
    baseUrl: '/app/'
  }
}
</script>

<template>
  <NuxtConfigPage
    name="prod"
    args="nuxtConfigParameters"
    :args-sample="sampleOptions"
  >
    <p>
      Add any Nuxt config you like, but only in dev mode.
    </p>

    <Dump :data="prod(sampleOptions)" />
  </NuxtConfigPage>
</template>
