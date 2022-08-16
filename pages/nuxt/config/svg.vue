<script setup>
const sampleOptions = {
  currentColor: '#FF00FF',
  removeViewBox: true

}
</script>

<template>
  <NuxtConfigPage
    name="svg"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      <strong>Support for importing SVGs as Vue components.</strong> SVGs are passed through SVGO and replacing any usage of the <code>currentColor</code> color value with the CSS keyword <code>currentColor</code>.
    </p>

    <p>
      See <ExternalLink href="https://github.com/svg/svgo/tree/main/plugins">SVGO documentation</ExternalLink> for all supported options.
    </p>

    <Dump :data="svg(sampleOptions)" />
  </NuxtConfigPage>
</template>
