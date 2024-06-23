<script setup>
const string = ref('///string')
const prefix = ref('/')

const treated = computed(() => {
  return removePrefix(string.value, prefix.value)
})
</script>

<template>
  <UtilPage
    name="removePrefix"
    args="string, prefix"
  >
    <p>
      <StyledTextfield v-model="string" />
      <StyledTextfield v-model="prefix" />
    </p>

    <p>
      <code>{{ treated }}</code>
    </p>
  </UtilPage>
</template>
