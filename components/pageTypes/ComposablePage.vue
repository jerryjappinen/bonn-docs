<script setup>
import upperFirst from 'lodash-es/upperFirst'

const props = defineProps({

  name: {
    type: String,
    required: true
  },

  args: {
    type: [Array, String, Object],
    default: null
  },

  deps: {
    type: [Array, String],
    default: null
  },

  props: {
    type: Object,
    default: null
  },

  methods: {
    type: Object,
    default: null
  }

})

const useName = 'use' + upperFirst(props.name)

const composableArgs = computed(() => {
  const args = unref(props.args)
  return args ? (Array.isArray(args) ? args : [args]) : []
})

const composableProps = computed(() => {
  return props.props
})

const deps = computed(() => {
  const deps = unref(props.deps)
  return deps ? (Array.isArray(deps) ? deps : [deps]) : []
})

const methods = computed(() => {
  const methods = unref(props.methods)
  return methods ? (Array.isArray(methods) ? methods : [methods]) : []
})
</script>

<template>
  <div>
    <Crumbs :source-path="`composables/${useName}.js`">
      <Icon><IconVue /></Icon> Composables
    </Crumbs>

    <h2><code>{{ useName }}({{ composableArgs.join(', ') }})</code></h2>

    <HighlightedPre
      v-if="deps.length"
      :code="'npm i ' + deps.join(' ')"
    />

    <HighlightedPre :code="`import { ${useName} } from 'bonn/composables'`" />

    <HighlightedPre :code="`const ${name} = ${useName}()`" />

    <template v-if="composableProps">
      <h3>Properties</h3>

      <ClientOnly>
        <table>
          <tbody>
            <tr
              v-for="(value, key) in composableProps"
              :key="key"
            >
              <th><HighlightedCode :code="`${name}.${key}`" /></th>
              <td><HighlightedPre :code="value" /></td>
            </tr>
          </tbody>
        </table>
      </ClientOnly>
    </template>

    <template v-if="methods">
      <h3>Methods</h3>

      <table>
        <tbody>
          <tr
            v-for="(method, key) in methods"
            :key="key"
          >
            <th><HighlightedCode :code="`${name}.${key}`" /></th>
            <td>
              <button @click="method">
                {{ key }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </template>

    <h3>Other</h3>

    <Bodytext>
      <slot />
    </Bodytext>
  </div>
</template>

<style lang="scss" scoped>

button {
  @include link;
  @include strong;
}

</style>
