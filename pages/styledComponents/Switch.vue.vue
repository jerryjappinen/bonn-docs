<script setup>
const value1 = ref(true)
const value2 = ref(false)
</script>

<template>
  <ComponentPage
    name="Switch"
    :css-vars="[
      'on-color',
      'on-knob-color',
      'off-color',
      'off-knob-color',
      'disabled-on-color',
      'disabled-on-knob-color',
      'disabled-off-color',
      'disabled-off-knob-color',
      'track-height',
      'track-width',
      'knob-margin',
      'knob-width'
    ]"
  >

    <p>
      <Toggle v-model="value1">
        <Switch :value="value2" />
      </Toggle>
    </p>

    <p>
      <Toggle v-model="value2">
        <Switch :value="value2" />
      </Toggle>
    </p>

  </ComponentPage>
</template>
