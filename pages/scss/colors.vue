<script setup>
const colorNames = [
  'grey',
  'blue'

  // 'red',
  // 'pink',
  // 'purple',
  // 'deep-purple',
  // 'indigo',
  // 'cyan',
  // 'teal',
  // 'green',
  // 'lime',
  // 'yellow',
  // 'amber',
  // 'orange',
  // 'brown'
]

const colorVariants = [
  'very-faint-',
  'faint-',
  '',
  'strong-',
  'very-strong-'
]

const colorCodes = [
  0,
  10,
  20,
  30,
  40,
  50,
  60,
  70,
  80,
  90,
  100
]
</script>

<template>
  <div class="new-colors">

    <h2>Full color codes</h2>

    <table>
      <thead>
        <tr>
          <th>Codes</th>
          <th
            v-for="colorCode in colorCodes"
            :key="colorCode"
          >{{ colorCode }}</th>
        </tr>
      </thead>

      <tbody>

        <!-- Code sheet -->
        <tr
          v-for="colorName in colorNames"
          :key="colorName"
        >
          <th>{{ colorName }}</th>
          <td
            v-for="colorCode in colorCodes"
            :key="colorCode"
            :style="`color: var(--${colorName + '-' + colorCode});`"
          ><span class="solid-block" /><span class="outline-block" /></td>
        </tr>

      </tbody>
    </table>

    <h2>Color variants</h2>

    <table>
      <thead>
        <tr>
          <th colspan="7">Regular color</th>
          <th colspan="7">Inverted scheme</th>
        </tr>
      </thead>

      <tbody>
        <template
          v-for="colorName in colorNames"
          :key="colorName"
        >
          <tr>
            <th colspan="14">{{ colorName }}</th>
          </tr>
          <tr
            v-for="colorVariant in colorVariants"
            :key="colorVariant"
          >
            <td>{{ colorVariant + colorName }}</td>
            <td :style="`color: var(--${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td :style="`color: var(--${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td :style="`color: var(--${colorVariant + colorName});`">Hello</td>
            <td class="offset" :style="`color: var(--${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td class="offset" :style="`color: var(--${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td class="offset" :style="`color: var(--${colorVariant + colorName});`">Hello</td>
            <td>inverted-{{ colorVariant + colorName }}</td>
            <td class="inverted" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td class="inverted" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td class="inverted" :style="`color: var(--inverted-${colorVariant + colorName});`">Hello</td>
            <td class="inverted offset" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td class="inverted offset" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td class="inverted offset" :style="`color: var(--inverted-${colorVariant + colorName});`">Hello</td>
          </tr>
        </template>
      </tbody>
    </table>

    <h2>Cheat sheet</h2>

    <table>
      <tbody>

        <!-- Codes -->
        <template
          v-for="colorName in colorNames"
          :key="colorName"
        >
          <tr
            v-for="colorCode in colorCodes"
            :key="colorCode"
          >
            <td>{{ colorName + '-' + colorCode }}</td>
            <td :style="`color: var(--${colorName + '-' + colorCode});`"><span class="solid-block" /></td>
            <td :style="`color: var(--${colorName + '-' + colorCode});`"><span class="outline-block" /></td>
            <td :style="`color: var(--${colorName + '-' + colorCode});`">Hello</td>
            <td class="inverted" :style="`color: var(--${colorName + '-' + colorCode});`"><span class="solid-block" /></td>
            <td class="inverted" :style="`color: var(--${colorName + '-' + colorCode});`"><span class="outline-block" /></td>
            <td class="inverted" :style="`color: var(--${colorName + '-' + colorCode});`">Hello</td>
          </tr>
        </template>

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

.inverted {
  background-color: var(--inverted-background-color);
}

.offset {
  background-color: grey;
}

.outline-block,
.solid-block {
  @include inline-block;
  @include round;
  border-width: 1px;
  margin-right: 0.25em;
  width: 0.75em;
  height: 0.75em;
  border-color: currentColor;
}

.solid-block {
  background-color: currentColor;
}

</style>
