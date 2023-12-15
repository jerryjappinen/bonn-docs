<script setup>
import formatMachineReadableDateTime from 'bonn/utils/formatMachineReadableDateTime'
</script>

<template>
  <UtilPage
    name="formatMachineReadableDateTime"
    args="date: new Date()"
    deps="date-fns"
  >
    <table>
      <tr>
        <td><code>formatMachineReadableDateTime(new Date())</code></td>
        <td>{{ formatMachineReadableDateTime(new Date()) }}</td>
      </tr>
    </table>
  </UtilPage>
</template>
