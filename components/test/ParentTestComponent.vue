<script setup>
import useTime from 'bonn/composables/useTime'

const time = useTime()

const endDate = time.current
</script>

<template>
  <ChildTestComponent
    class="c-live-duration"
    :end-date="endDate"
    date="2022-08-5"
  />
</template>
