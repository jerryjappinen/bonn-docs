<script setup>
const val = ref(true)
</script>

<template>
  <ComponentPage
    name="Checkbox"
    :css-vars="[
      'width',
      'border-width',
      'radius',
      'enabled-on-color',
      'enabled-off-color',
      'enabled-check-color',
      'disabled-on-color',
      'disabled-off-color',
      'disabled-check-color'
    ]"
  >
    <p>
      <Toggle v-model="val">
        <Checkbox v-model="val" />
      </Toggle>

      <Toggle
        v-model="val"
        :disabled="true"
      >
        <Checkbox
          v-model="val"
          :disabled="true"
        />
      </Toggle>
    </p>

    <p>
      <Toggle v-model="val">
        <Checkbox :model-value="!val" />
      </Toggle>

      <Toggle
        v-model="val"
        :disabled="true"
      >
        <Checkbox
          :model-value="!val"
          :disabled="true"
        />
      </Toggle>
    </p>
  </ComponentPage>
</template>
