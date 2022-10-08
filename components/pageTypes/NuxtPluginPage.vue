<script setup>
import isArray from 'lodash-es/isArray'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  args: {
    type: [Array, String],
    default: undefined
  }
})

const pluginArgs = computed(() => {
  const args = unref(props.args)

  return args
    ? (isArray(args) ? args : [args])
    : []
})
</script>

<template>
  <div>
    <h2><code>{{ name }}</code></h2>

    <HighlightedPre
      :file="`plugins/${name}.js`"
      :code="`import ${name} from 'bonn/nuxt/plugins/${name}'

export default defineNuxtPlugin(${name}(${pluginArgs.join(', ')}))`"
    />

    <Bodytext>
      <slot />
    </Bodytext>

    <p>
      <SourceLink :path="`nuxt/plugins/${name}.js`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>
  </div>
</template>
