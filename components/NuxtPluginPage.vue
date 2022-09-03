<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const pluginName = props.name
const pluginArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
</script>

<template>
  <div>

    <h2><code>{{ pluginName }}</code></h2>

    <HighlightedPre :file="`plugins/${pluginName}.js`">import { {{ pluginName }} } from 'bonn/nuxt/plugins'

export default defineNuxtPlugin({{ pluginName }}({{ pluginArgs.join(', ') }}))</HighlightedPre>

    <Bodytext>

      <slot />

      <p>
        <ExternalLink :href="`https://github.com/jerryjappinen/bonn/blob/main/nuxt/plugins/${pluginName}.js`">
          <Icon>
            <IconGithub /> Source
          </Icon>
        </ExternalLink>
      </p>

    </Bodytext>

  </div>
</template>
