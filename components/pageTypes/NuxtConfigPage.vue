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
    <Crumbs :source-path="`nuxt/config/${name}.js`">
      <Icon><IconNuxtColor /></Icon> Nuxt config
    </Crumbs>

    <h2><code>{{ name }}({{ args.join(', ') }})</code></h2>

    <HighlightedPre :code="`import { ${name} } from 'bonn/nuxt/config'`" />

    <template v-if="argsSample.length">
      <Dump
        v-for="(sample, i) in argsSample"
        :key="i"
        :data="sample"
      />
    </template>

    <HighlightedPre :code="`defineNuxtConfig(${name}(${args.join(', ')}))`" />

    <Bodytext>
      <slot />
    </Bodytext>

    <p v-if="deps && deps.length">
      Uses these packages: {{ deps.join(' ') }}
    </p>
  </div>
</template>
