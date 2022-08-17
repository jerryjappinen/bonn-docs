<script setup>
const isExpanded = ref(false)
</script>

<template>
  <ComponentPage name="Expand">

    <p>
      <Toggle v-model="isExpanded">
        <Expand>
          <div v-if="isExpanded" key="expanded">
            Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded.
          </div>
          <div v-else key="collapsed">
            Collapsed
          </div>
        </Expand>
      </Toggle>
    </p>

  </ComponentPage>
</template>
