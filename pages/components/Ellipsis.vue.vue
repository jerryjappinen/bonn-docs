<script setup>
const isLoading = ref(true)
</script>

<template>
  <ComponentPage name="Ellipsis">

    <p>
      <label>
        <input type="checkbox" v-model="isLoading" /> <code>loading</code>
      </label>
    </p>

    <p>
      <Ellipsis :loading="isLoading" />
    </p>

  </ComponentPage>
</template>
