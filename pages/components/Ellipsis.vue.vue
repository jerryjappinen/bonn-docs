<script setup>
const isLoading = ref(true)
</script>

<template>
  <ComponentPage
    name="Ellipsis"
    :css-vars="[
      'duration',
      'delay'
    ]"
  >
    <p>
      <label>
        <input
          v-model="isLoading"
          type="checkbox"
        > <code>loading</code>
      </label>
    </p>

    <p>
      <Ellipsis :loading="isLoading" />
    </p>
  </ComponentPage>
</template>
