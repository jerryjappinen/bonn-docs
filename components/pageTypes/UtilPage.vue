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

const utilArgs = computed(() => {
  const args = unref(props.args)
  return args ? (Array.isArray(args) ? args : [args]) : []
})

const utilDeps = computed(() => {
  const deps = unref(props.deps)
  return deps ? (Array.isArray(deps) ? deps : [deps]) : []
})
</script>

<template>
  <div>
    <h2><code>{{ async ? 'async ' : '' }}{{ name }}({{ utilArgs.join(', ') }})</code></h2>

    <HighlightedPre
      v-if="utilDeps.length"
      :code="`npm i ${utilDeps.join(' ')}`"
    />

    <HighlightedPre :code="`import ${name} from 'bonn/util/${name}'`" />

    <Bodytext>
      <slot />
    </Bodytext>

    <p>
      <SourceLink :path="`util/${name}.js`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>
  </div>
</template>
