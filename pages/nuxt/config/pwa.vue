<script setup>
import helper from 'bonn/nuxt/config/pwa'

const sampleOptions = {
    icon: true,
    maskable: true,

    title: 'Foo bar',
    // shortTitle,
    // description,

    // startPath,
    // rtl,
    // lang,

    // backgroundColor,
    // themeColor,

    // fullscreen, standalone, minimal-ui, browser
    // https://developer.mozilla.org/en-US/docs/Web/Manifest/display
    // display,
    offline: true
  }
</script>

<template>
  <NuxtConfigPage
    name="pwa"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Use the <ExternalLink href="https://pwa.nuxtjs.org/"><code>pwa</code></ExternalLink> module to enable web ap features.
    </p>

    <h4><code>manifest.json</code></h4>

    <p>
      The <code>pwa</code> module generates a <code>manifest.json</code> file. If you use this module, make sure you don't have a manifest file under <code>public/</code>.
    </p>

    <p>
      If you don't use this module, you can still create <code>public.manifest.json</code> file manually.
    </p>

    <h4>Output</h4>

    <Dump :data="helper(sampleOptions)" />

  </NuxtConfigPage>
</template>
