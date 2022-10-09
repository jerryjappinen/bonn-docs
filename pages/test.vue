<script setup>
const isToggled = ref(false)

const toggle = () => {
  isToggled.value = !isToggled.value
}
</script>

<template>
  <div class="page-test">
    <h2>Composable tests</h2>

    <p>
      <CursorComposableTest />
      <CursorComposableTest />
      <CursorComposableTest />
      <CursorComposableTest />
      <CursorComposableTest />
    </p>

    <p>
      <PiniaComposableTest />
      <PiniaComposableTest />
      <PiniaComposableTest />
      <PiniaComposableTest />
      <PiniaComposableTest />
    </p>

    <h2>Transition tests</h2>

    <p>
      <button @click="toggle">
        Toggle
      </button>
    </p>

    <div class="page-test-transition-test">
      <Fade>
        <div v-if="isToggled" key="is">
          Is toggled
        </div>
        <div v-else key="not">
          Is not toggled
        </div>
      </Fade>
    </div>
  </div>
</template>

<style lang="scss">

:root {
  .page-test-transition-test {
    --c-fade-duration: 2000ms !important;
    // --c-fade-enter-duration: 10000ms !important;
    // --c-fade-leave-duration: 11000ms !important;

    div {
      @include pad;
      @include radius;
      border-width: 5px;
    }

  }
}

</style>
