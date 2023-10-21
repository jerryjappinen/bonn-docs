<script setup>
import dev from 'bonn/nuxt/config/dev'

const sampleOptions = {
  app: {
    baseUrl: '/app/'
  }
}
</script>

<template>
  <NuxtConfigPage
    name="dev"
    args="nuxtConfigParameters"
    :args-sample="sampleOptions"
  >
    <p>
      Add any Nuxt config you like, but only in dev mode.
    </p>

    <Dump :data="dev(sampleOptions)" />
  </NuxtConfigPage>
</template>
