<script setyp>
// NOTE: see variables/transitions.scss
// const defaultEnterDuration = 150
// const defaultLeaveDuration = 450

// defineProps({

//   duration: {
//     type: Number,
//     default: null
//   },

//   // durationEnter: {
//   //   type: Number,
//   //   default: null
//   // },

//   durationLeave: {
//     type: Number,
//     default: null
//   }

// })
</script>

<template>
  <transition
    :appear="true"
    mode="out-in"
    name="c-popover-transition"
  >
    <slot />
  </transition>
</template>

<style lang="scss">

.c-popover-transition-enter-active,
.c-popover-transition-leave-active {
  opacity: 1;

  transition-duration: var(--transition-enter);
  transition-property: opacity, transform;

  .c-popover-overlay,
  .c-popover-content,
  .c-popover-content-inner {
    opacity: 1;

    transition-duration: var(--transition-enter);
    transition-property: opacity, transform;
  }

  .c-popover-content,
  .c-popover-content-inner {
    @include no-translate;
    // @include transition-delay-fast;
  }

}

.c-popover-transition-leave-active {
  transition-duration: var(--transition-leave);

  .c-popover-overlay,
  .c-popover-content,
  .c-popover-content-inner {
    transition-duration: var(--transition-leave);
  }
}

.c-popover-transition-enter-from,
.c-popover-transition-leave-to {
  opacity: 0;

  // .c-popover-overlay,
  // .c-popover-content,
  // .c-popover-content-inner {
  //   opacity: 0;
  // }

}

.c-popover-transition-enter-from {

  .c-popover-inline-content {
    @include translate-up(var(--pad-loose-vertical));
  }

  .c-popover-fullscreen-content {
    @include translate-down;
  }

  .c-popover-content-inner {
    @include translate-up(var(--pad-vertical));
  }

}

.c-popover-transition-leave-to {
  pointer-events: none;

  .c-popover-inline-content {
    @include translate-down(var(--pad-loose-vertical));
  }

  .c-popover-fullscreen-content {
    @include translate-down;
  }

  .c-popover-content-inner {
    @include translate-down(var(--pad-vertical));
  }

}

</style>
