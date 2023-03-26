<script setup>
import compact from 'lodash-es/compact'
import flattenDeep from 'lodash-es/flattenDeep'
import kebabCase from 'lodash-es/kebabCase'

const props = defineProps({

  name: {
    type: String,
    required: true
  },

  cssVars: {
    type: [Array, String],
    default: null
  },

  deps: {
    type: [Array, String],
    default: null
  }

})

const deps = computed(() => {
  const deps = unref(props.deps)
  return deps ? (Array.isArray(deps) ? deps : [deps]) : []
})

const cssVars = computed(() => {
  return compact(flattenDeep([unref(props.cssVars)]))
})

const getCssVariableLine = (cssVar) => {
  return `--c-${kebabCase(unref(props.name))}-${kebabCase(cssVar)}: ...;`
}

const css = computed(() => {
  return cssVars.value.length
    ? ':root {' + cssVars.value.map(cssVar => '\n' + '  ' + getCssVariableLine(cssVar)) + '\n' + '}'
    : null
})

</script>

<template>
  <div>
    <Crumbs :source-path="`components/${name}.js`">
      <Icon><IconVueColor /></Icon> Components
    </Crumbs>

    <h2><code>{{ name }}</code></h2>

    <HighlightedPre
      v-if="deps.length"
      :code="'npm i ' + deps.join(' ')"
    />

    <HighlightedPre :code="`import ${name} from 'bonn/components/${name}'`" />

    <slot />

    <template v-if="css">
      <h2>CSS variables</h2>
      <HighlightedPre :code="css" lang="code" />
    </template>
  </div>
</template>
