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

const endpointArgs = computed(() => {
  const args = unref(props.args)
  return args ? (Array.isArray(args) ? args : [args]) : []
})
</script>

<template>
  <div>
    <Crumbs :source-path="`vercel/${name}.js`">
      <Icon><IconVercel /></Icon> Vercel
    </Crumbs>

    <h2><code>{{ name }}({{ endpointArgs.join(', ') }})</code></h2>

    <HighlightedPre :code="`import ${name} from 'bonn/vercel/${name}'`" />

    <Bodytext>
      <slot />
    </Bodytext>
  </div>
</template>
