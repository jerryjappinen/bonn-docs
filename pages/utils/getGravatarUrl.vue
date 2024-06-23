<script setup>
const email = ref('eiskis@gmail.com')
const size = ref(128)

const imageUrl = computed(() => {
  return getGravatarUrl(email.value, size.value)
})
</script>

<template>
  <UtilPage
    name="getGravatarUrl"
    :args="['email', 'size', 'fallbackImageUrl']"
  >
    <p>
      <input v-model="email">

      <input
        v-model="size"
        type="number"
      >
    </p>

    <Dump :data="imageUrl" />
  </UtilPage>
</template>
