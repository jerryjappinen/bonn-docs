<script setup>
const themes = [
  'primary',
  'secondary',
  'tertiary',
  'transparent',
  'link'
]
</script>

<template>
  <ComponentPage name="StyledButton">

    <table>
      <tbody>

        <tr
          v-for="theme in themes"
          :key="theme"
        >
          <th>
            <code>primary</code> (default)
          </th>
          <td>
            <StyledButton :theme="theme">
              {{ theme }}
            </StyledButton>
          </td>
          <td>
            <StyledButton :theme="theme" :disabled="true">
              {{ theme }} disabled
            </StyledButton>
          </td>
        </tr>
      </tbody>
    </table>

  </ComponentPage>
</template>
