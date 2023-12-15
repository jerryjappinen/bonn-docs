<script setup>
import upperFirst from 'lodash-es/upperFirst'

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
    <Crumbs :source-path="`stores/setup/${name}.js`">
      <Icon><IconPiniaColor /></Icon> Pinia store
    </Crumbs>

    <h2>
      <code>stores/{{ name }}</code>
    </h2>

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
      :file="`stores/my${upperFirst(name)}Store.js`"
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

    <p v-if="deps && deps.length">
      Uses these packages: {{ deps.join(' ') }}
    </p>

    <slot />
  </div>
</template>
