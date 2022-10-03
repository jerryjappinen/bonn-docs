<script setup>
const props = defineProps({

  name: {
    type: String,
    required: true
  },

  args: {
    type: [Array, String, Object],
    default: null
  },

  argSamples: {
    type: [Array, String, Object],
    default: null
  },

  deps: {
    type: [Array, String],
    default: null
  }

})

const storeName = props.name
const storeArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
const storeArgSamples = props.argSamples ? (Array.isArray(props.argSamples) ? props.argSamples : [props.argSamples]) : []
const storeDeps = props.deps ? (Array.isArray(props.deps) ? props.deps : [props.deps]) : []
</script>

<template>
  <div>

    <h2>
      <code>stores/{{ storeName }}</code>
    </h2>

    <HighlightedPre
      v-if="storeDeps.length"
      :code="`npm i -D ${storeDeps.join(' ')}`"
    />

    <p>
      Use directly in your app:
    </p>

    <HighlightedPre
      file="pages/MyPage.vue"
      :code="`import ${storeName} from 'bonn/stores/${storeName}'`"
    />

    <p>
      Or make a customised store:
    </p>

    <HighlightedPre
      file="stores/myHygraphStore.js"
      :code="`import { defineStore } from 'pinia'
import ${storeName}Setup from 'bonn/stores/setup/${storeName}'

export default defineStore('${storeName}', ${storeName}Setup(${storeArgs.join(', ')}))`"
    />

    <template v-if="storeArgSamples.length">
      <Dump
        v-for="(sample, i) in storeArgSamples"
        :key="i"
        :data="sample"
      />
    </template>

    <slot />
    <!-- <Bodytext></Bodytext> -->

    <p>
      <SourceLink :path="`stores/setup/${name}.js`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>

  </div>
</template>
