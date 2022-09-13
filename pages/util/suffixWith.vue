<script setup>
import suffixWith from 'bonn/util/suffixWith'

const string = ref('string')
const suffix = ref('/')
const noDuplicates = ref(true)

const treated = computed(() => {
  return suffixWith(string.value, suffix.value)
})
</script>

<template>
  <UtilPage
    name="suffixWith"
    args="string, suffix, noDuplicates"
  >
    <p>
      <StyledTextfield v-model="string" />
      <StyledTextfield v-model="suffix" />
      <Toggle v-model="noDuplicates">
        <Switch :value="noDuplicates" />
      </Toggle>
    </p>

    <p>
      <code>{{ treated }}</code>
    </p>
  </UtilPage>
</template>
