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
  }

})

const importString = `import ${props.name} from 'bonn/components/${props.name}'`

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
    <h2><code>{{ name }}</code></h2>

    <HighlightedPre :code="importString" />

    <slot />

    <template v-if="css">
      <h2>CSS variables</h2>
      <HighlightedPre :code="css" lang="code" />
    </template>

    <p>
      <SourceLink :path="`components/${name}.js`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>
  </div>
</template>
