<script setup>
const selected = ref(null)

const options = [
  {
    label: 'Foo Bar',
    value: 'foobar'
  },
  {
    label: 'Group',
    value: [
      {
        label: 'Foo',
        value: 'foo'
      },
      {
        label: 'bar',
        value: 'bar'
      }
    ]
  }
]

const clear = () => {
  selected.value = null
}
</script>

<template>
  <ComponentPage name="Dropdown">
    <p>
      Selected: <code>{{ selected }}</code> (<button @click="clear">
        clear
      </button>)
    </p>

    <p>
      <Dropdown
        v-model="selected"
        placeholder="Select one of the options available..."
        :options="options"
      />
    </p>

    <Dump :data="options" />
  </ComponentPage>
</template>
