<script setup>
const string = ref('string')
const suffix = ref('/')
const keepDuplicates = ref(false)

const treated = computed(() => {
  return suffixWith(string.value, suffix.value, keepDuplicates.value)
})
</script>

<template>
  <UtilPage
    name="suffixWith"
    args="string, suffix, keepDuplicates"
  >
    <p>
      <StyledTextfield v-model="string" />
      <StyledTextfield v-model="suffix" />
      <Toggle v-model="keepDuplicates">
        <Switch v-model="keepDuplicates" /> keepDuplicates
      </Toggle>
    </p>

    <p>
      <code>{{ treated }}</code>
    </p>
  </UtilPage>
</template>
