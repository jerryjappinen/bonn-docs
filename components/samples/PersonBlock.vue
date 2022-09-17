<script setup>
import useHygraph from '@/stores/useHygraph'

const props = defineProps({
  person: {
    type: Object,
    required: true
  }
})

const hygraph = useHygraph()

const photo = computed(() => {
  return hygraph.entriesById[props.person.photo]
})
</script>

<template>
  <div class="c-person-block">

    <img
      v-if="photo"
      :src="photo.url"
      class="c-person-block-image"
    />

    <span class="c-person-block-name">
      {{ person.name }}
    </span>
  </div>
</template>

<style lang="scss">

.c-person-block {
  @include flex;
  @include flex-center;
}

.c-person-block-image {
  @include round;
  width: 80px;
}

</style>
