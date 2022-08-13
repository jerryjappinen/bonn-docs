<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  }
})

const importString = `import ${props.name} from 'bonn/components/${props.name}'`
</script>

<template>
  <div>

    <h2><code>{{ name }}</code></h2>

    <pre><code>{{ importString }}</code></pre>

    <p>
      <ExternalLink :href="`https://github.com/jerryjappinen/bonn/blob/main/components/${name}.js`">
        <Icon>
          <IconGithub /> Source
        </Icon>
      </ExternalLink>
    </p>

    <slot />

  </div>
</template>
