<script setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  unref,
  watch
} from 'vue'

import usePopover from 'bonn/stores/popover'
import useViewport from 'bonn/composables/useViewport'

// Definitions

const props = defineProps({

  modelValue: {
    type: Boolean,
    required: true
  },

  theme: {
    type: String,
    default: null
  },

  preventOverlayClick: {
    type: Boolean,
    default: false
  },

  isFullscreen: {
    type: Boolean,
    default: false
  },

  safeMargin: {
    type: Number,
    default: 16
  }

})

const emit = defineEmits([
  'update:modelValue',
  'open',
  'close'
])

// Services
const popover = usePopover()
const viewport = useViewport()
const contentElement = ref(null)

const isFullscreen = computed(() => {
  const propValue = unref(props.isFullscreen)

  // Default behavior: keep fullscreen on small screens
  if (propValue === undefined) {
    return viewport.exactBreakpoint.value < 2
  }

  return propValue
})

// Bindings

// Popover is closed by setting the parent's isOpen property to false
const close = () => {
  emit('update:modelValue', false)
  emit('close')
}

// Close self if popover store is called
watch(popover.shouldBeOpen, (newShouldBeOpen) => {
  if (!newShouldBeOpen) {
    close()
  }
})

onMounted(() => {
  // Bind closing to resize/scroll events
  window.addEventListener('resize', close)
  window.addEventListener('scroll', close)

  // Emissions
  popover.markOpen()
  emit('open')

  // FIXME: how to hook up to mobile back button without messing with routing?
  // window.addEventListener('backbutton', close)

  // Update position immediately
  updatePosition()
})

onUnmounted(() => {
  // Bind closing to resize/scroll events
  window.removeEventListener('resize', close)
  window.removeEventListener('scroll', close)

  // Popover can't be open if it's closed
  popover.markClosed()
})

const onOverlayClick = () => {
  if (!unref(preventOverlayClick)) {
    close()
  }
}

// Dimensions and positioning

const getWidth = () => {
  return contentElement.value ? contentElement.value.offsetWidth : 0
}

const getHeight = () => {
  return contentElement.value ? contentElement.value.offsetHeight : 0
}

// const getHorizontalOffset = () => {
//   return contentElement.value ? contentElement.value.offsetLeft : 0
// }

// const getVerticalOffset = () => {
//   return contentElement.value ? contentElement.value.offsetTop : 0
// }

const getLeftPositionInViewport = () => {
  return contentElement.value ? Math.ceil(contentElement.value.getBoundingClientRect().left) : 0
}

const getTopPositionInViewport = () => {
  return contentElement.value ? Math.ceil(contentElement.value.getBoundingClientRect().top) : 0
}

// Style setup
// FIXME: why isn't this done with style bindings?
// const leftOffset = ref(0)
// const topOffset = ref(0)
// const maxWidth = ref(0)
// const maxHeight = ref(0)

// const styleBinding = computed(() => {
//   if (!isFullscreen.value) {
//     return {
//       left: leftOffset.value + 'px',
//       top: topOffset.value + 'px',
//       maxWidth: maxWidth.value + 'px',
//       maxHeight: maxHeight.value + 'px'
//     }
//   }
//   return undefined
// })

const setHorizontalOffset = (offset) => {
  if (contentElement.value) {
    contentElement.value.style.left = offset + 'px'
  }
}

const setVerticalOffset = (offset) => {
  if (contentElement.value) {
    contentElement.value.style.top = offset + 'px'
  }
}

const setMaxWidth = (width) => {
  if (contentElement.value) {
    contentElement.value.style.maxWidth = width + 'px'
  }
}

const setMaxHeight = (height) => {
  if (contentElement.value) {
    contentElement.value.style.maxHeight = height + 'px'
  }
}

const setAbsoluteHorizontalPositioning = () => {
  const availableHorizontalSpace = viewport.width.value - unref(props.safeMargin)

  // Popover will never fit the viewport: make it smaller
  const originalContainerWidth = getWidth()
  if (availableHorizontalSpace < originalContainerWidth) {
    setMaxWidth(availableHorizontalSpace)
  }

  // Calculate dimensions after potential resize
  const containerWidth = getWidth()
  const containerLeftPosition = getLeftPositionInViewport()
  const containerRightPosition = containerLeftPosition + containerWidth

  // Popover overflows viewport
  if (availableHorizontalSpace < containerRightPosition) {
    const requiredOffset = availableHorizontalSpace - containerRightPosition

    // Move popover up/down so it fits the viewport
    setHorizontalOffset(requiredOffset)
  }
}

const setAbsoluteVerticalPositioning = () => {
  const availableVerticalSpace = viewport.height.value - unref(props.safeMargin)

  // Popover will never fit the viewport: make it smaller
  const originalContainerHeight = getHeight()
  if (availableVerticalSpace < originalContainerHeight) {
    setMaxHeight(availableVerticalSpace)
  }

  // Calculate dimensions after potential resize
  const containerHeight = getHeight()
  const containerTopPosition = getTopPositionInViewport()
  const containerBottomPosition = containerTopPosition + containerHeight

  // Popover overflows viewport
  if (availableVerticalSpace < containerBottomPosition) {
    const requiredOffset = availableVerticalSpace - containerBottomPosition

    // Move popover up/down so it fits the viewport
    setVerticalOffset(requiredOffset)
  }
}

// Custom positioning for inline popovers (i.e. dropdowns)
const updatePosition = () => {
  if (!isFullscreen.value) {
    setAbsoluteHorizontalPositioning()
    setAbsoluteVerticalPositioning()
  }
}
</script>

<template>
  <div
    class="c-popover"
    :class="{
      'c-popover-inline': !isFullscreen,
      'c-popover-fullscreen': isFullscreen,
      ['c-popover-' + theme]: theme,
      ['c-popover-' + theme + '-inline']: theme && !isFullscreen,
      ['c-popover-' + theme + '-fullscreen']: theme && isFullscreen
    }"
  >
    <div
      ref="contentElement"
      class="c-popover-content"
      :class="{
        'c-popover-inline-content': !isFullscreen,
        'c-popover-fullscreen-content': isFullscreen,
        ['c-popover-' + theme + '-content']: theme,
        ['c-popover-' + theme + '-inline-content']: theme && !isFullscreen,
        ['c-popover-' + theme + '-fullscreen-content']: theme && isFullscreen
      }"
    >
      <div
        class="c-popover-content-inner"
        :class="{
          'c-popover-inline-content-inner': !isFullscreen,
          'c-popover-fullscreen-content-inner': isFullscreen,
          ['c-popover-' + theme + '-content-inner']: theme,
          ['c-popover-' + theme + '-inline-content-inner']: theme && !isFullscreen,
          ['c-popover-' + theme + '-fullscreen-content-inner']: theme && isFullscreen
        }"
      >
        <slot />
      </div>
    </div>

    <div
      class="c-popover-overlay"
      :class="{
        'c-popover-inline-overlay': !isFullscreen,
        'c-popover-fullscreen-overlay': isFullscreen,
        ['c-popover-' + theme + '-overlay']: theme,
        ['c-popover-' + theme + '-inline-overlay']: theme && !isFullscreen,
        ['c-popover-' + theme + '-fullscreen-overlay']: theme && isFullscreen
      }"
      @click="onOverlayClick"
    />
  </div>
</template>

<style lang="scss">

// FIXME: split some of this into StyledPopover

:root {
  // --c-popover-z-index: 10000;
  // --c-popover-overlay-opacity: 0.5;
  // --c-popover-background-color: var(--background-color);
  // --c-popover-overlay-color: var(--inverted-background-color);

  // --c-popover-fullscreen-min-height: var(--content-width-tight);
  // --c-popover-inline-width: var(--content-width-tight);
  // --c-popover-inline-max-height: var(--content-width);
}

.c-popover {
  z-index: var(--c-popover-z-index, 10000);
}

.c-popover-content {
  @include border-box;
  @include pad-vertical;
  @include scroll-vertical;
  z-index: 2;
  background-color: var(--c-popover-background-color, var(--background-color));
}

.c-popover-content-inner {
  @include relative;
}

.c-popover-overlay {
  @include fill-fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

// Fullscreen

.c-popover-fullscreen {
  @include fill-fixed;
}

.c-popover-fullscreen-content {
  @include absolute;
  @include border-box;
  @include radius-loose-top;
  @include buffer-vertical-even;

  left: 0;
  bottom: 0;
  width: 100%;
  min-height: var(--c-popover-fullscreen-min-height, var(--content-width-tight));
  max-height: calc(100vh - 3em);
}

.c-popover-fullscreen-overlay {
  background-color: var(--c-popover-overlay-color, var(--inverted-background-color));
}

// Inline

.c-popover-inline {
  @include absolute;
}

.c-popover-inline-content {
  @include shadow;
  @include absolute;
  @include radius-loose;

  width: var(--c-popover-inline-width, var(--content-width-tight));
  max-height: var(--c-popover-inline-max-height, var(--content-width));
}

</style>
