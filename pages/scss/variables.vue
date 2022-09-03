<script setup>
// bonn/scss/variables/colors.scss
const colorUsage = [
  'text-color',
  'background-color',
  'offset-background-color',
  'border-color',
  'discreet-color-light',
  'discreet-color',
  'discreet-color-dark',
  'discreet-text-color',
  'link-color',
  'link-active-color'
]

const colorValues = [
  'white',
  'very-very-light-grey',
  'very-light-grey',
  'light-grey',
  'grey',
  'dark-grey',
  'dark',
  'very-dark',
  'black',
  'light-red',
  'red',
  'dark-red',
  'light-pink',
  'pink',
  'dark-pink',
  'light-orange',
  'orange',
  'dark-orange',
  'light-yellow',
  'yellow',
  'dark-yellow',
  'light-green',
  'green',
  'dark-green',
  'light-purple',
  'purple',
  'dark-purple',
  'light-blue',
  'blue',
  'dark-blue',
]
</script>

<template>
  <div>
    <h2>Color usage</h2>

    <table>
      <tbody>
        <tr
          v-for="color in colorUsage"
          :key="color"
          :class="`color-${color}`"
        >
          <td><code>{{ color }}</code></td>

          <!-- light -->
          <td
            class="light"
            :style="`color: var(--${color})`"
          >
            <span class="block" />Text
          </td>

          <!-- dark -->
          <td
            class="dark"
            :style="`color: var(--${color})`"
          >
            <span class="block" />Text
          </td>

        </tr>
      </tbody>
    </table>



    <h2>Color values</h2>

    <table>
      <tbody>
        <tr
          v-for="color in colorValues"
          :key="color"
          :class="`color-${color}`"
        >
          <td><code>{{ color }}</code></td>

          <!-- light -->
          <td
            class="light"
            :style="`color: var(--${color})`"
          >
            <span class="block" />Text
          </td>

          <!-- dark -->
          <td
            class="dark"
            :style="`color: var(--${color})`"
          >
            <span class="block" />Text
          </td>

        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>

th,
td {
  vertical-align: middle;
  @include pad-tight;
}

.dark {
  background-color: #000;

  @include dark {
    background-color: #fff;
  }
}

.block {
  @include inline-block;
  @include round;
  margin-right: 0.25em;
  width: 0.75em;
  height: 0.75em;
  background-color: currentColor;
}

</style>
