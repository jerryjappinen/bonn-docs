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

const configName = unref(props.name)
const configArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
const configArgSamples = props.argSamples ? (Array.isArray(props.argSamples) ? props.argSamples : [props.argSamples]) : []
const configDeps = props.deps ? (Array.isArray(props.deps) ? props.deps : [props.deps]) : []
</script>

<template>
  <div>
    <h2><code>{{ configName }}({{ configArgs.join(', ') }})</code></h2>

    <HighlightedPre
      v-if="configDeps.length"
      :code="`npm i -D ${configDeps.join(' ')}`"
    />

    <HighlightedPre :code="`import ${configName} from 'bonn/nuxt/config/${configName}'`" />

    <template v-if="configArgSamples.length">
      <Dump
        v-for="(sample, i) in configArgSamples"
        :key="i"
        :data="sample"
      />
    </template>

    <HighlightedPre :code="`defineNuxtConfig(${configName}(${configArgs.join(', ')}))`" />

    <Bodytext>
      <slot />
    </Bodytext>

    <p>
      <SourceLink :path="`nuxt/config/${name}.js`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>
  </div>
</template>
