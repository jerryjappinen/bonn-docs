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

const configName = props.name
const configArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
const configArgSamples = props.argSamples ? (Array.isArray(props.argSamples) ? props.argSamples : [props.argSamples]) : []
const configDeps = props.deps ? (Array.isArray(props.deps) ? props.deps : [props.deps]) : []
</script>

<template>
  <div>

    <h2><code>{{ configName }}({{ configArgs.join(', ') }})</code></h2>

    <HighlightedPre v-if="configDeps.length">npm i -D {{ configDeps.join(' ') }}</HighlightedPre>

    <HighlightedPre>import { {{ configName }} } from 'bonn/nuxt/config'</HighlightedPre>

    <template v-if="configArgSamples.length">
      <Dump
        v-for="(sample, i) in configArgSamples"
        :key="i"
        :data="sample"
      />
    </template>

    <HighlightedPre>defineNuxtConfig({{ configName }}({{ configArgs.join(', ') }}))</HighlightedPre>

    <Bodytext>

      <slot />

      <p>
        <ExternalLink :href="`https://github.com/jerryjappinen/bonn/blob/main/nuxt/config/${configName}.js`">
          <Icon>
            <IconGithub /> Source
          </Icon>
        </ExternalLink>
      </p>

    </Bodytext>

  </div>
</template>
