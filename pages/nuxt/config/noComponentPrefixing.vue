<script setup>
import noComponentPrefixing from 'bonn/nuxt/config/noComponentPrefixing'

const sampleOptions = '~/customComponentsDir'
</script>

<template>
  <NuxtConfigPage
    name="noComponentPrefixing"
    args="componentsDir"
    :args-sample="sampleOptions"
  >
    <p>
      Removes <ExternalLink href="https://v3.nuxtjs.org/guide/directory-structure/components#component-names">
        prefixing of component names
      </ExternalLink>. When you use this, the names of your custom components will always match their file names, regardless of directory structure.
    </p>

    <Dump :data="noComponentPrefixing()" />
  </NuxtConfigPage>
</template>
