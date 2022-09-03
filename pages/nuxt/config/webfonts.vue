<script setup>
import webfonts from 'bonn/nuxt/config/webfonts'

const sampleOptions = [
  {
    family: 'Poppins',
    weight: '400',
    style: 'normal',
    path: 'fonts/poppins-400'
  },
  {
    family: 'Poppins',
    weight: '700',
    style: 'bold',
    path: 'fonts/poppins-700'
  }
]
</script>

<template>
  <NuxtConfigPage
    name="webfonts"
    args="...fontDefinitions"
    :args-sample="sampleOptions"
  >
    <p>Add local webfonts to your app.</p>

    <h4>Config output</h4>

    <Dump :data="webfonts(sampleOptions)" />
  </NuxtConfigPage>
</template>
