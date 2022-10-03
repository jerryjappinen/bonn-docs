<script setup>
const colorNames = [
  'neutral',
  'blue',
  'green',
  'purple',
  'red',
  'orange',
  'yellow'
]

// 8 variants
const colorVariants = [
  'very-very-very-faint-',
  'very-very-faint-',
  'very-faint-',
  'faint-',
  '',
  'strong-',
  'very-strong-',
  'very-very-strong-'
]

const colorCodes = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8
]
</script>

<template>
  <div class="new-colors">

    <h2>Full color codes</h2>

    <table>
      <thead>
        <tr>
          <th>Codes</th>
          <td
            v-for="colorCode in colorCodes"
            :key="colorCode"
          ><code>{{ colorCode }}</code></td>
        </tr>
      </thead>

      <tbody>

        <!-- Code sheet -->
        <tr
          v-for="colorName in colorNames"
          :key="colorName"
        >
          <th><code>{{ colorName }}</code></th>
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
          <th colspan="4">Regular color</th>
          <th colspan="4">Inverted scheme</th>
        </tr>
      </thead>

      <tbody>
        <template
          v-for="colorName in colorNames"
          :key="colorName"
        >
          <tr>
            <th colspan="14"><code>{{ colorName }}</code></th>
          </tr>
          <tr
            v-for="colorVariant in colorVariants"
            :key="colorVariant"
          >
            <td><code>{{ colorVariant + colorName }}</code></td>
            <td class="block-cell solid-cell" :style="`color: var(--${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td class="block-cell outline-cell" :style="`color: var(--${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td class="block-cell text-cell" :style="`color: var(--${colorVariant + colorName});`">Hello</td>
            <!-- <td class="offset" :style="`color: var(--${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td class="offset" :style="`color: var(--${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td class="offset" :style="`color: var(--${colorVariant + colorName});`">Hello</td> -->
            <td><code>inverted-{{ colorVariant + colorName }}</code></td>
            <td class="block-cell solid-cell inverted" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td class="block-cell outline-cell inverted" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td class="block-cell text-cell inverted" :style="`color: var(--inverted-${colorVariant + colorName});`">Hello</td>
            <!-- <td class="inverted offset" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="solid-block" /></td>
            <td class="inverted offset" :style="`color: var(--inverted-${colorVariant + colorName});`"><span class="outline-block" /></td>
            <td class="inverted offset" :style="`color: var(--inverted-${colorVariant + colorName});`">Hello</td> -->
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
  @include pad-tight-even-max;
  vertical-align: middle;

  code {
    @include small-font;
  }

}

.inverted {
  background-color: var(--inverted-background-color);
}

.block-cell {

  background-image: conic-gradient(
    from 45deg at 50% 50%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.75) 100%)
  ;

  @include dark {
    background-image: conic-gradient(
      from 45deg at 50% 50%,
    rgba(255, 255, 255, 0) 50%,
    rgba(255, 255, 255, 0.75) 100%)
    ;
  }

}

.outline-cell,
.solid-cell,
.text-cell {
  text-align: center;
}

.outline-cell,
.solid-cell {
  width: 2em;
}

.outline-block,
.solid-block {
  @include inline-block;
  @include radius-tight;
  @include border-box;
  width: 1em;
  height: 1em;
  box-shadow: 0 0 0 1px inset currentColor;
  border-color: currentColor;
}

.solid-block {
  background-color: currentColor;
}

</style>
