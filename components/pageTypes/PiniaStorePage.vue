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

const storeArgs = computed(() => {
  const args = unref(props.args)
  return args ? (Array.isArray(args) ? args : [args]) : []
})

const storeArgSamples = computed(() => {
  const argSamples = unref(props.argSamples)
  return argSamples ? (Array.isArray(argSamples) ? argSamples : [argSamples]) : []
})

const storeDeps = computed(() => {
  const deps = unref(props.deps)
  return deps ? (Array.isArray(deps) ? deps : [deps]) : []
})
</script>

<template>
  <div>
    <h2>
      <code>stores/{{ name }}</code>
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
      :code="`import ${name} from 'bonn/stores/${name}'`"
    />

    <p>
      Or make a customised store:
    </p>

    <HighlightedPre
      file="stores/myHygraphStore.js"
      :code="`import { defineStore } from 'pinia'
import ${name}Setup from 'bonn/stores/setup/${name}'

export default defineStore('${name}', ${name}Setup(${storeArgs.join(', ')}))`"
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
