<script setup>
// bonn/scss/variables/colors.scss
const colorUsage = [
  'text-color',
  'border-color',
  'background-color',
  'offset-background-color',
  'discreet-color-very-light',
  'discreet-color-light',
  'discreet-color',
  'discreet-text-color',
  'link-color',
  'link-active-color',

  'inverted-text-color',
  'inverted-border-color',
  'inverted-background-color',
  'inverted-offset-background-color',
  'inverted-discreet-color-very-light',
  'inverted-discreet-color-light',
  'inverted-discreet-color',
  'inverted-discreet-text-color',
  'inverted-link-color',
  'inverted-link-active-color'
]

const textUsage = [
  'default-font',
  'default-font-size',
  'default-line-height',
  'link-weight'
]
</script>

<template>
  <div>
    <h2>Text usage</h2>

    <table>
      <tbody>
        <tr
          v-for="varName in textUsage"
          :key="varName"
        >
          <td><code>{{ varName }}</code></td>
        </tr>
      </tbody>
    </table>

    <h2>Color usage</h2>

    <table>
      <tbody>
        <tr
          v-for="color in colorUsage"
          :key="color"
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
