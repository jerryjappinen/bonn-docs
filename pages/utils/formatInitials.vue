<script setup>
const text = ref('Some Name Goes Here')

const initials = computed(() => {
  return formatInitials(text.value)
})
</script>

<template>
  <UtilPage
    name="formatInitials"
    args="string"
    deps="lodash-es"
  >
    <p>
      <label>
        Edit this text:
        <input
          v-model="text"
          type="text"
        >
      </label>
    </p>

    <p>
      Corresponding initials: <code>{{ initials }}</code>
    </p>
  </UtilPage>
</template>
