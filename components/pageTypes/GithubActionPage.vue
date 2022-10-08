<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  args: {
    type: Object,
    default: undefined
  }
})

const usageSample = computed(() => {
  const args = unref(props.args) || {}

  // Basic YML
  let yml = `on: push
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: jerryjappinen/bonn/.github/actions/run`

  // Add arguments
  const withLines = []
  for (const argName in args) {
    withLines.push(`${argName}: ${args[argName]}`)
  }

  if (withLines.length) {
    yml += `
        with:
          ${withLines.join('\n          ')}`
  }

  return yml
})
</script>

<template>
  <div>
    <h2><code>{{ name }}.yml</code></h2>

    <HighlightedPre
      :file="`.github/workflows/your-workflow.yml`"
      lang="yml"
      :code="usageSample"
    />

    <Bodytext>
      <slot />
    </Bodytext>

    <p>
      <SourceLink :path="`.github/actions/${name}.yml`">
        <Icon><IconGithub /></Icon> Source
      </SourceLink>
    </p>
  </div>
</template>
