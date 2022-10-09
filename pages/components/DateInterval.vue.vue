<script setup>
const startDate = '2022-01-01'
const endDate = '2022-04-01'

const code = `<DateInterval
  :startDate="${startDate}"
  :end-date="${endDate}"
/>`
</script>

<template>
  <ComponentPage name="DateInterval">
    <HighlightedPre
      :code="code"
      lang="html"
    />

    <p>
      <DateInterval
        :start-date="startDate"
        :end-date="endDate"
      />
    </p>
  </ComponentPage>
</template>
