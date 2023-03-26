<script setup>
import helper from 'bonn/nuxt/config/robots'

const configPath = 'path/to/robots/config/file.js'
</script>

<template>
  <NuxtConfigPage
    name="robots"
    args="rules"
  >
    <p>
      Produce a <code>robots.txt</code>. Uses the <ExternalLink href="https://nuxt.com/modules/robots">
        Robots module
      </ExternalLink>.
    </p>

    <h4>Add rules</h4>

    <HighlightedPre code="helper({ UserAgent: '*' }, { Disallow: '/' })" />

    <Dump :data="helper({ UserAgent: '*' }, { Disallow: '/' })" />

    <h4>Use external config file</h4>

    <HighlightedPre code="helper(configPath)" />

    <Dump :data="helper(configPath)" />
  </NuxtConfigPage>
</template>
