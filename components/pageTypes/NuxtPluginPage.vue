<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const pluginName = unref(props.name)
const pluginArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
</script>

<template>
  <div>
    <h2><code>{{ pluginName }}</code></h2>

    <HighlightedPre
      :file="`plugins/${pluginName}.js`"
      :code="`import ${pluginName} from 'bonn/nuxt/plugins/${pluginName}'

export default defineNuxtPlugin(${pluginName}(${pluginArgs.join(', ')}))`"
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
