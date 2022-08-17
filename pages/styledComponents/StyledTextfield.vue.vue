<script setup>
const textValue = ref('')
</script>

<template>
  <ComponentPage name="StyledTextfield">

    <table>
      <tbody>

        <tr>
          <th>
            <code>default</code>
          </th>
          <td>
            <StyledTextfield v-model="textValue" />
          </td>
        </tr>

        <tr>
          <th>
            <code>placeholder</code>
          </th>
          <td>
            <StyledTextfield
              v-model="textValue"
              placeholder="Enter something..."
            />
          </td>
        </tr>

        <tr>
          <th>
            <code>disabled</code>
          </th>
          <td>
            <StyledTextfield
              v-model="textValue"
              :disabled="true"
            />
          </td>
        </tr>

      </tbody>
    </table>

  </ComponentPage>
</template>
