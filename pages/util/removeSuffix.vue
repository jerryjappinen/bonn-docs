<script setup>
import removeSuffix from '../../../bonn/util/removeSuffix'

const string = ref('string')
const suffix = ref('/')

const treated = computed(() => {
  return removeSuffix(string.value, suffix.value)
})
</script>

<template>
  <UtilPage
    name="removeSuffix"
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
