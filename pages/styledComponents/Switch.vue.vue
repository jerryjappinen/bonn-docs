<script setup>
const val = ref(true)
</script>

<template>
  <ComponentPage
    name="Switch"
    :css-vars="[
      'border-width',
      'radius',
      'on-color',
      'on-knob-color',
      'off-color',
      'off-knob-color',
      'disabled-on-color',
      'disabled-on-knob-color',
      'disabled-off-color',
      'disabled-off-knob-color',
      'knob-width',
      'knob-margin',
      'track-width',
      'track-height'
    ]"
  >

    <table>
      <tbody>
        <tr>
          <td>enabled</td>
          <td>{{ val ? 'on' : 'off' }}</td>
          <td>
            <Toggle v-model="val">
              <Switch :model-value="val" />
            </Toggle>
          </td>
        </tr>

        <tr>
          <td>disabled</td>
          <td>{{ val ? 'on' : 'off' }}</td>
          <td>
            <Switch :model-value="val" :disabled="true" />
          </td>
        </tr>

        <tr>
          <td>enabled</td>
          <td>{{ val ? 'off' : 'on' }}</td>
          <td>
            <Toggle v-model="val">
              <Switch :model-value="!val" />
            </Toggle>
          </td>
        </tr>

        <tr>
          <td>disabled</td>
          <td>{{ val ? 'off' : 'on' }}</td>
          <td>
            <Switch :model-value="!val" :disabled="true" />
          </td>
        </tr>
      </tbody>
    </table>
  </ComponentPage>
</template>
