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
    <h2><code>{{ name }}({{ args.join(', ') }})</code></h2>

    <HighlightedPre
      v-if="deps.length"
      :code="`npm i -D ${deps.join(' ')}`"
    />

    <HighlightedPre
      :code="`import ${name} from 'bonn/nuxt/head/${name}'

useHead(${name}(${args.join(', ')}))`"
    />

    In <code>nuxt.config</code>:

    <HighlightedPre
      :code="`import ${name} from 'bonn/nuxt/config/${name}'

defineNuxtConfig(${name}(${args.join(', ')}))`"
    />

    <template v-if="argsSample.length">
      <p>Sample arguments:</p>

      <Dump
        v-for="(sample, i) in argsSample"
        :key="i"
        :data="sample"
      />
    </template>

    <Bodytext>
      <slot />
    </Bodytext>

    <p>
      <SourceLink :path="`nuxt/head/${name}.js`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>
  </div>
</template>
