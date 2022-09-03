<script setup>
import pinia from 'bonn/nuxt/config/pinia'
</script>

<template>
  <NuxtConfigPage name="pinia">
    <p>
      Enable <ExternalLink href="https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html">Pinia</ExternalLink> in your Nuxt app.
    </p>

    <p>
      To support peristence, add the <NuxtLink to="/nuxt/plugins/piniaPersist">/nuxt/plugins/piniaPersist</NuxtLink> Nuxt plugin to your app.
    </p>

    <Dump :data="pinia()" />
  </NuxtConfigPage>
</template>
