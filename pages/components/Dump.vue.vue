<script setup>
const dump = {
  startDate: '2022-01-01',
  endDate: '2022-04-01'
}
</script>

<template>
  <ComponentPage name="Dump">
    <Dump :data="dump" />
  </ComponentPage>
</template>
