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
  // https://stackoverflow.com/questions/69034292/how-do-you-use-a-composite-action-that-exists-in-a-private-repository
  let yml = `on: push
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/checkout@v3
        with:
          repository: jerryjappinen/bonn
          path: .github/workflows
      - uses: ./.github/workflows/actions`

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

    <!-- <p>
      <strong>These actions cannot be used from another repository yet.</strong>
    </p> -->

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
