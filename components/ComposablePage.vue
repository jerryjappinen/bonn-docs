<script setup>
import upperFirst from 'lodash-es/upperFirst'

const props = defineProps({

  name: {
    type: String,
    required: true
  },

  args: {
    type: [Array, String, Object],
    default: null
  },

  deps: {
    type: [Array, String],
    default: null
  },

  props: {
    type: Object,
    default: null
  },

  methods: {
    type: Object,
    default: null
  }

})

const useName = 'use' + upperFirst(props.name)

const composableArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
const composableDeps = props.deps ? (Array.isArray(props.deps) ? props.deps : [props.deps]) : []
const composableProps = props.props
const composableMethods = props.methods
</script>

<template>
  <Bodytext>

    <h2><code>{{ useName }}({{ composableArgs.join(', ') }})</code></h2>

    <HighlightedPre v-if="composableDeps.length">npm i {{ composableDeps.join(' ') }}</HighlightedPre>

    <HighlightedPre>import { {{ useName }} } from 'bonn/composables'</HighlightedPre>

    <HighlightedPre>const {{ props.name }} = {{ useName }}()</HighlightedPre>

    <p>
      <ExternalLink :href="`https://github.com/jerryjappinen/bonn/blob/main/composables/${useName}.js`">
        <Icon>
          <IconGithub /> Source
        </Icon>
      </ExternalLink>
    </p>



    <template v-if="composableProps">

      <h3>Properties</h3>

      <table>
        <tr
          v-for="(value, key) in composableProps"
          :key="key"
        >
          <th><HighlightedCode>{{ name }}.{{ key }}</HighlightedCode></th>
          <td><HighlightedPre>{{ value }}</HighlightedPre></td>
        </tr>
      </table>

    </template>



    <template v-if="composableMethods">

      <h3>Methods</h3>

      <table>
        <tr
          v-for="(method, key) in composableMethods"
          :key="key"
        >
          <th><HighlightedCode>{{ name }}.{{ key }}</HighlightedCode></th>
          <td><button @click="method">{{ key }}</button></td>
        </tr>
      </table>

    </template>



    <h3>Other</h3>

    <slot />

  </Bodytext>
</template>

<style lang="scss" scoped>

button {
  @include link;
  @include strong;
}

</style>
