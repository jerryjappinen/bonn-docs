<script setup>
const value1 = ref(true)
const value2 = ref(false)
</script>

<template>
  <ComponentPage
    name="Checkbox"
    :css-vars="[
      'width',
      'border-width',
      'enabled-on-color',
      'enabled-off-color',
      'enabled-check-color',
      'disabled-on-color',
      'disabled-off-color',
      'disabled-check-color'
    ]"
  >

    <p>
      <Toggle v-model="value1">
        <Checkbox :value="value1" />
      </Toggle>
    </p>

    <p>
      <Toggle v-model="value2">
        <Checkbox :value="value2" />
      </Toggle>
    </p>

    <p>
      <Toggle
        v-model="value1"
        :disabled="true"
      >
        <Checkbox
          v-model="value1"
          :disabled="true"
        />
      </Toggle>
    </p>

    <p>
      <Toggle
        v-model="value2"
        :disabled="true"
      >
        <Checkbox
          v-model="value2"
          :disabled="true"
        />
      </Toggle>
    </p>

  </ComponentPage>
</template>
