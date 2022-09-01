<script setup>
import pinia from 'bonn/nuxt/config/pinia'

import useMyStore from '@/stores/useMyStore'

const store = useMyStore()
</script>

<template>
  <NuxtConfigPage name="pinia">
    <p>
      Enable <ExternalLink href="https://pinia.vuejs.org/">Pinia</ExternalLink> in your Nuxt app.
    </p>

    <h4>Persistance</h4>

    <Dump :data="store.someValue" />

    <p>
      <Textfield v-model="store.someValue" />
    </p>

    <p>
      <ExternalLink href="https://github.com/prazdevs/pinia-plugin-persistedstate"><code>pinia-plugin-persistedstate</code></ExternalLink> is included out of the box. Enable it in your store like this:
    </p>

    <HighlightedPre>
import { defineStore } from 'pinia'

export default defineStore('myStore', {
  persist: true,

  state: () => {
    return {
      someState: 'hello pinia'
    }
  }
})
    </HighlightedPre>

    <h4>Configuration</h4>

    <Dump :data="pinia()" />
  </NuxtConfigPage>
</template>

<style lang="scss">

.c-textfield {
  border-width: 1px;
}

</style>
