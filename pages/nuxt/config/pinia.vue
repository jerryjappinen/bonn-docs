<script setup>
import helper from 'bonn/nuxt/config/pinia'

const sampleOptions = {
  persist: true
}
</script>

<template>
  <NuxtConfigPage
    name="pinia"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Enable <ExternalLink href="https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html">
        Pinia
      </ExternalLink> in your Nuxt app.
    </p>

    <Dump
      :data="helper({
        persist: true
      })"
    />
  </NuxtConfigPage>
</template>
