<script setup>
import arrayProp from '@/util/arrayProp'

const props = defineProps({

  name: {
    type: String,
    required: true
  },

  args: {
    type: [Array, String, Object],
    default: null
  },

  argsSample: {
    type: [Array, String, Object],
    default: null
  },

  deps: {
    type: [Array, String],
    default: null
  }

})

const args = arrayProp(props.args)
const argsSample = arrayProp(props.argsSample)
const deps = arrayProp(props.deps)
</script>

<template>
  <div>
    <h2>
      <code>stores/{{ name }}</code>
    </h2>

    <HighlightedPre
      v-if="deps.length"
      :code="`npm i -D ${deps.join(' ')}`"
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

export default defineStore('${name}', ${name}Setup(${args.join(', ')}))`"
    />

    <template v-if="argsSample.length">
      <Dump
        v-for="(sample, i) in argsSample"
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
