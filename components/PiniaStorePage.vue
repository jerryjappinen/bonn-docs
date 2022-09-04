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
      <code>Pinia {{ storeName }} store</code>
    </h2>

    <HighlightedPre v-if="storeDeps.length">
npm i -D {{ storeDeps.join(' ') }}
    </HighlightedPre>

    <p>
      Use directly in your app:
    </p>

    <HighlightedPre file="pages/MyPage.vue">import { {{ storeName }} } from 'bonn/stores'</HighlightedPre>

    <p>
      Or make a customised store:
    </p>

    <HighlightedPre file="stores/myHygraphStore.js">import { defineStore } from 'pinia'
import { {{ storeName }} } from 'bonn/stores/setup'

export default defineStore('{{ storeName }}', {{ storeName }}({{ storeArgs.join(', ') }}))</HighlightedPre>

    <template v-if="storeArgSamples.length">
      <Dump
        v-for="(sample, i) in storeArgSamples"
        :key="i"
        :data="sample"
      />
    </template>

    <Bodytext>

      <slot />

      <p>
        <ExternalLink :href="`https://github.com/jerryjappinen/bonn/blob/main/stores/setup/${storeName}.js`">
          <Icon>
            <IconGithub /> Source
          </Icon>
        </ExternalLink>
      </p>

    </Bodytext>

  </div>
</template>
