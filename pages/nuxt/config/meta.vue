<script setup>
import helper from 'bonn/nuxt/config/meta'

const sampleOptions = {
  author: 'Author Name',
  title: 'My App',
  longTitle: 'My App – Super nice app for you',
  description: 'Longer description that can complement the title somehow'
}
</script>

<template>
  <NuxtConfigPage
    name="meta"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Define the site-wide meta data for your Nuxt site.
    </p>

    <Dump :data="helper(sampleOptions)" />
  </NuxtConfigPage>
</template>
