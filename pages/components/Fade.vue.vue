<script setup>
const demoValue = ref(true)

const reverse = ref(false)

const directions = [
  'top',
  'bottom',
  'left',
  'right'
]
</script>

<template>
  <ComponentPage
    name="Fade"
    class="page-components-fade"
    :css-vars="[
      'duration',
      'distance',

      'enter-duration',
      'leave-duration',

      'from-left-duration',
      'from-right-duration',
      'from-top-duration',
      'from-bottom-duration',

      'to-left-duration',
      'to-right-duration',
      'to-top-duration',
      'to-bottom-duration',

      'enter-distance',
      'leave-distance',

      'from-left-distance',
      'from-right-distance',
      'from-top-distance',
      'from-bottom-distance',

      'to-left-distance',
      'to-right-distance',
      'to-top-distance',
      'to-bottom-distance'
    ]"
  >
    <Toggle v-model="demoValue" :block="true">
      <Fade>
        <div v-if="demoValue" key="if" class="page-components-fade-demo-block">
          True
        </div>
        <div v-else key="else" class="page-components-fade-demo-block-alt">
          False
        </div>
      </Fade>
    </Toggle>

    <h3>Directions</h3>

    <Toggle v-model="demoValue" :block="true">
      <Fade from="top">
        <div v-if="demoValue" key="if" class="page-components-fade-demo-block">
          from="top"
        </div>
        <div v-else key="else" class="page-components-fade-demo-block-alt">
          from="top"
        </div>
      </Fade>
    </Toggle>

    <Toggle v-model="demoValue" :block="true">
      <Fade from="bottom">
        <div v-if="demoValue" key="if" class="page-components-fade-demo-block">
          from="bottom"
        </div>
        <div v-else key="else" class="page-components-fade-demo-block-alt">
          from="bottom"
        </div>
      </Fade>
    </Toggle>

    <Toggle v-model="demoValue" :block="true">
      <Fade from="left">
        <div v-if="demoValue" key="if" class="page-components-fade-demo-block">
          from="left"
        </div>
        <div v-else key="else" class="page-components-fade-demo-block-alt">
          from="left"
        </div>
      </Fade>
    </Toggle>

    <Toggle v-model="demoValue" :block="true">
      <Fade from="right">
        <div v-if="demoValue" key="if" class="page-components-fade-demo-block">
          from="right"
        </div>
        <div v-else key="else" class="page-components-fade-demo-block-alt">
          from="right"
        </div>
      </Fade>
    </Toggle>

    <h3>Completely custom directions</h3>

    <p>
      <Toggle v-model="reverse" :block="true">
        <Switch :value="reverse" />
        Reverse
      </Toggle>
    </p>

    <table>
      <thead>
        <tr>
          <th><code>from</code></th>
          <th><code>to</code></th>
          <th><code>reverse</code></th>
          <th>example</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="from in directions">
          <tr
            v-for="to in directions"
            :key="from + '-' + to"
          >
            <td><code>{{ from }}</code></td>
            <td><code>{{ to }}</code></td>
            <td><code>{{ reverse }}</code></td>
            <td>
              <Toggle v-model="demoValue" :block="true">
                <Fade
                  :from="from"
                  :to="to"
                  :reverse="reverse"
                >
                  <span v-if="demoValue" key="if" class="page-components-fade-demo-block">hello</span>
                  <span v-else key="else" class="page-components-fade-demo-block-alt">world</span>
                </Fade>
              </Toggle>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </ComponentPage>
</template>

<style lang="scss">

.page-components-fade {
  --c-fade-duration: 2s;
  --c-fade-distance: 1em;

  .c-toggle {
    padding: 1em;
    border-width: 1px;
  }

}

.page-components-fade-demo-block,
.page-components-fade-demo-block-alt {
  padding: 0.2em 4em;
  @include block;
  @include radius;
  @include align-center;
  border-width: 1px;
}

.page-components-fade-demo-block {
  border-color: var(--green);
}

.page-components-fade-demo-block-alt {
  border-color: var(--blue);
}

</style>
