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

const utilArgs = props.args ? (Array.isArray(props.args) ? props.args : [props.args]) : []
const utilDeps = props.deps ? (Array.isArray(props.deps) ? props.deps : [props.deps]) : []
</script>

<template>
  <div>

    <h2><code>{{ async ? 'async ' : '' }}{{ props.name }}({{ utilArgs.join(', ') }})</code></h2>

    <HighlightedPre
      v-if="utilDeps.length"
      :code="`npm i ${utilDeps.join(' ')}`"
    />

    <HighlightedPre :code="`import ${props.name} from 'bonn/util/${props.name}'`" />

    <Bodytext>
      <slot />

      <p>
        <ExternalLink :href="`https://github.com/jerryjappinen/bonn/blob/main/util/${name}.js`">
          <Icon>
            <IconGithub /> Source
          </Icon>
        </ExternalLink>
      </p>

    </Bodytext>
  </div>
</template>
