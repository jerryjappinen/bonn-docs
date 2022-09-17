<script setup>
const props = defineProps({
  person: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <span class="c-person-teaser">{{ person.name }}</span>
</template>
