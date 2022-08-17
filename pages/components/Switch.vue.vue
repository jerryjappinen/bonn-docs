<script setup>
const value = ref(false)
</script>

<template>
  <ComponentPage name="Switch">

    <p>
      <Toggle v-model="value">
        <Switch :value="value" />
      </Toggle>
    </p>

  </ComponentPage>
</template>
