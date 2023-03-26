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

  examplePaths: {
    type: [Array, String],
    default: null
  }

})

const args = arrayProp(props.args)
const examplePaths = arrayProp(props.examplePaths)
</script>

<template>
  <div>
    <Crumbs :source-path="`vercel/endpoints/${name}.js`">
      <Icon><IconVercel /></Icon> Vercel endpoint
    </Crumbs>

    <h2><code>{{ name }}</code></h2>

    <HighlightedPre
      file="api/my-endpoint.js"
      :code="`import ${name} from 'bonn/vercel/endpoints/${name}'

export default ${name}(${ args.join(', ') })`"
    />

    <Bodytext>
      <ul v-if="examplePaths.length">
        <li
          v-for="examplePath in examplePaths"
          :key="examplePath"
        >
          <a :href="`/api/${examplePath}`">/api/{{ examplePath }}</a>
        </li>
      </ul>

      <slot />
    </Bodytext>
  </div>
</template>
