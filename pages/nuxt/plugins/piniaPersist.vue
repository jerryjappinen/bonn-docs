<script setup>
import useMyStore from '@/stores/useMyStore'

const store = useMyStore()
</script>

<template>
  <NuxtPluginPage
    name="piniaPersist"
    plugin-args="options"
  >
    <Dump :data="store.someValue" />

    <p>
      <Textfield v-model="store.someValue" />
    </p>

    <p>
      <ExternalLink href="https://github.com/prazdevs/pinia-plugin-persistedstate">
        <code>pinia-plugin-persistedstate</code>
      </ExternalLink> is included out of the box. Enable it in your store like this:
    </p>

    <HighlightedPre
      code="import { defineStore } from 'pinia'

export default defineStore('myStore', {
  persist: true,

  state () {
    return {
      someState: 'hello pinia'
    }
  }
})"
    />
  </NuxtPluginPage>
</template>

<style lang="scss">

  .c-textfield {
    border-width: 1px;
  }

  </style>
