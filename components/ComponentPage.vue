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

const css = computed(() => {
  if (cssVars.value.length) {
    return `/*CSS variables*/
:root {${cssVars.value.map((cssVar) => {
  return '\n' + `  --c-${kebabCase(unref(props.name))}-${kebabCase(cssVar)}: ...;`
})}
}`
  }

  return null
})
</script>

<template>
  <div>

    <h2><code>{{ name }}</code></h2>

    <HighlightedPre :code="importString" />

    <slot />

    <Dump
      v-if="css"
      :data="css"
    />

    <Bodytext>
      <p>
        <ExternalLink :href="`https://github.com/jerryjappinen/bonn/blob/main/components/${name}.js`">
          <Icon>
            <IconGithub /> Source
          </Icon>
        </ExternalLink>
      </p>
    </Bodytext>

  </div>
</template>
