<script setup>
const props = defineProps({

  name: {
    type: String,
    required: true
  },

  args: {
    type: [Array, String],
    default: null
  },

  deps: {
    type: [Array, String],
    default: null
  },

  async: {
    type: Boolean,
    default: false
  }

})

const args = arrayProp(props.args)
const deps = arrayProp(props.deps)
</script>

<template>
  <div>
    <Crumbs :source-path="`node/${name}.js`">
      <Icon><IconJavascriptColor /></Icon> Node utilities
    </Crumbs>

    <h2><code>{{ async ? 'async ' : '' }}{{ name }}({{ args.join(', ') }})</code></h2>

    <HighlightedPre :code="`import ${name} from 'bonn/node/${name}'`" />

    <Bodytext>
      <slot />
    </Bodytext>

    <p v-if="deps && deps.length">
      Uses these packages: {{ deps.join(' ') }}
    </p>
  </div>
</template>
