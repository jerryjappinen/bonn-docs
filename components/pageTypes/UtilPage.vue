<script setup>
import arrayProp from '@/util/arrayProp'

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
    <Crumbs :source-path="`util/${name}.js`">
      <Icon><IconJavascriptColor /></Icon> Utilities
    </Crumbs>

    <h2><code>{{ async ? 'async ' : '' }}{{ name }}({{ args.join(', ') }})</code></h2>

    <HighlightedPre
      v-if="deps.length"
      :code="`npm i ${deps.join(' ')}`"
    />

    <HighlightedPre :code="`import ${name} from 'bonn/util/${name}'`" />

    <Bodytext>
      <slot />
    </Bodytext>
  </div>
</template>
