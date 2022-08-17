<script setup>
const booleanValue = ref(false)
</script>

<template>
  <ComponentPage name="Toggle">

    <p>
      <Toggle v-model="booleanValue">
        Click to toggle boolean value
      </Toggle>
    </p>

    <Dump :data="{ booleanValue }" />

  </ComponentPage>
</template>
