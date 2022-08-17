<template>
  <div class="c-layout-default">

    <!-- Content area -->
    <div class="c-layout-default-main">
      <div class="c-layout-default-main-content">
        <slot class="c-layout-default-page" />
      </div>
    </div>

    <!-- Sidebar -->
    <div class="c-layout-default-sidebar">
      <div class="c-layout-default-sidebar-content">
        <MainMenu />
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.c-layout-default {
  @include flex;
  height: 100vh;
}

.c-layout-default-sidebar,
.c-layout-default-main {
  @include scroll-vertical;
  height: 100%;
}

.c-layout-default-sidebar {
  @include flex-fixed;
  border-right-width: 1px;
  width: 18em;
  max-width: 35%;
}

.c-layout-default-main {
  @include flex-fluid;
}

.c-layout-default-main-content {
  @include buffer-relative;
}



// Menu

.c-layout-default-sidebar-content {
  @include buffer;
  font-size: 0.9em;
}

</style>
