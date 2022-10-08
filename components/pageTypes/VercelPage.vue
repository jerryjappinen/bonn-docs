<script setup>
const props = defineProps({

  name: {
    type: String,
    required: true
  },

  args: {
    type: [Array, String],
    default: null
  }

})

const endpointArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
</script>

<template>
  <div>
    <h2><code>{{ name }}({{ endpointArgs.join(', ') }})</code></h2>

    <HighlightedPre :code="`import ${name} from 'bonn/vercel/${name}'`" />

    <Bodytext>
      <slot />
    </Bodytext>

    <p>
      <SourceLink :path="`vercel/endpoints/${name}.js`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>
  </div>
</template>
