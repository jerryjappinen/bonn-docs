<script setup>
import isSuffixed from '../../../bonn/util/isSuffixed'

const string = ref('string')
const suffix = ref('/')

const treated = computed(() => {
  return isSuffixed(string.value, suffix.value)
})
</script>

<template>
  <UtilPage
    name="isSuffixed"
    args="string, suffix"
  >
    <p>
      <StyledTextfield v-model="string" />
      <StyledTextfield v-model="suffix" />
    </p>

    <p>
      <code>{{ treated }}</code>
    </p>
  </UtilPage>
</template>
