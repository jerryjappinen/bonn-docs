<script setup>
// import Expand from 'bonn/experimentalComponents/Expand'

const isExpanded = ref(false)
</script>

<template>
  <div class="page-test">
    <h2>Sandbox page</h2>

    <Bodytext>
      <p>Here's some body text.</p>
    </Bodytext>

    <p>
      <Toggle v-model="isExpanded">
        <!-- <Expand>
          <div v-if="isExpanded" key="expanded">
            Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded. Expanded.
          </div>
          <div v-else key="collapsed">
            Collapsed
          </div>
        </Expand> -->
        Foo
      </Toggle>
    </p>

  </div>
</template>

<style lang="scss">

.page-test {
  color: v(red);
}

</style>
