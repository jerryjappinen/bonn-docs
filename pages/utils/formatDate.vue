<script setup>
const renderedDate = formatDate(new Date())
</script>

<template>
  <UtilPage
    name="formatDate"
    args="date: new Date()"
    deps="date-fns"
  >
    <table>
      <tr>
        <td><code>formatDate(new Date())</code></td>
        <td>{{ renderedDate }}</td>
      </tr>
    </table>
  </UtilPage>
</template>
