<script setup>
const oldDate1 = new Date('2018-01-01 22:22:22')
const oldDate2 = new Date('2018-01-02 22:22:22')
const oldDate3 = new Date('2018-02-02 22:22:22')
const oldDate4 = new Date('2019-02-02 22:22:22')

const renderedDateInterval1 = formatDateInterval(oldDate1, oldDate2)
const renderedDateInterval2 = formatDateInterval(oldDate2, oldDate3)
const renderedDateInterval3 = formatDateInterval(oldDate3, oldDate4)
const renderedDateInterval4 = formatDateInterval(oldDate1, oldDate4)
const renderedDateInterval5 = formatDateInterval(oldDate4, oldDate1)
</script>

<template>
  <UtilPage
    name="formatDateInterval"
    :args="['olderDate', 'newerDate: new Date()']"
    deps="date-fns"
  >
    <HighlightedPre
      :code="`const oldDate1 = new Date('2018-01-01 22:22:22')
const oldDate2 = new Date('2018-01-02 22:22:22')
const oldDate3 = new Date('2018-02-02 22:22:22')
const oldDate4 = new Date('2019-02-02 22:22:22')`"
    />

    <table>
      <tr>
        <td><code>formatDateInterval(oldDate1, oldDate2)</code></td>
        <td>{{ renderedDateInterval1 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate2, oldDate3)</code></td>
        <td>{{ renderedDateInterval2 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate3, oldDate4)</code></td>
        <td>{{ renderedDateInterval3 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate1, oldDate4)</code></td>
        <td>{{ renderedDateInterval4 }}</td>
      </tr>

      <tr>
        <td><code>formatDateInterval(oldDate4, oldDate1)</code></td>
        <td>{{ renderedDateInterval5 }}</td>
      </tr>
    </table>
  </UtilPage>
</template>
