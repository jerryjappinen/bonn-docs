<script setup>
import helper from 'bonn/nuxt/config/routing'

const sampleOptions = {
  baseUrl: '/',
  crawlLinks: true,
  ignore: [],
  routes: [],
  rules: {}
}
</script>

<template>
  <NuxtConfigPage
    name="routing"
    args="options"
    :args-sample="sampleOptions"
  >
    <p>
      Define base URL, prerendered routes and possible server routes for your app.
    </p>

    <p>
      <strong>Note!</strong> This helper will see some updates as long as <ExternalLink href="https://nitro.unjs.io/config#routerules">
        <code>routeRules</code>
      </ExternalLink> remains experimental.
    </p>

    <Dump :data="sampleOptions" />
    <Dump :data="helper(sampleOptions)" />
  </NuxtConfigPage>
</template>
