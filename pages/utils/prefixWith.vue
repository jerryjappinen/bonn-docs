<script setup>
const string = ref('string')
const prefix = ref('/')
const keepDuplicates = ref(false)

const treated = computed(() => {
  return prefixWith(string.value, prefix.value, keepDuplicates.value)
})
</script>

<template>
  <UtilPage
    name="prefixWith"
    args="string, prefix, keepDuplicates"
  >
    <p>
      <StyledTextfield v-model="string" />
      <StyledTextfield v-model="prefix" />
      <Toggle v-model="keepDuplicates">
        <Switch v-model="keepDuplicates" /> keepDuplicates
      </Toggle>
    </p>

    <p>
      <code>{{ treated }}</code>
    </p>
  </UtilPage>
</template>
