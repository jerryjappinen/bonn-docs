<script setup>
const demo = ref('foo@bar.io')
</script>

<template>
  <UtilPage
    name="isEmail"
    args="string"
  >
    <p>
      <input
        v-model="demo"
        type="email"
      >
      {{ isEmail(demo.value) }}
    </p>
  </UtilPage>
</template>
