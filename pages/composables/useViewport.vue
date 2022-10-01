<script setup>
const viewport = useViewport()
</script>

<template>
  <ComposablePage
    name="viewport"
    :props="{
      breakpoints: viewport.breakpoints,
      hasObtrusiveScrollbars: viewport.hasObtrusiveScrollbars,
      darkMode: viewport.darkMode,
      width: viewport.width,
      height: viewport.height,
      scroll: viewport.scroll,
      scrollX: viewport.scrollX,
      isScrollingDown: viewport.isScrollingDown,
      isScrollingUp: viewport.isScrollingUp,
      centerX: viewport.centerX,
      centerY: viewport.centerY,
      isScrolled: viewport.isScrolled,
      isScrolledX: viewport.isScrolledX,
      isLandscape: viewport.isLandscape,
      isPortrait: viewport.isPortrait,
      currentBreakpointRange: viewport.currentBreakpointRange,
      previousBreakpoint: viewport.previousBreakpoint,
      exactBreakpoint: viewport.exactBreakpoint,
      nextBreakpoint: viewport.nextBreakpoint
    }"
  >
    <p>Automatically initialised on mount.</p>
  </ComposablePage>
</template>
