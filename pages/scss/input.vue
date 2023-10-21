<template>
  <ScssPage>
    <h2>Input</h2>

    <div class="tests">
      <code class="test can-hover">can-hover</code>
      <code class="test can-not-hover">can-not-hover</code>
      <code class="test can-point">can-point</code>
      <code class="test can-not-point">can-not-point</code>
    </div>
  </ScssPage>
</template>

<style lang="scss" scoped>

// https://www.smashingmagazine.com/2022/03/guide-hover-pointer-media-queries/
@mixin can-hover {
  @media (any-hover: hover) {
    @content;
  }
}

@mixin can-not-hover {
  @media (any-hover: none) {
    @content;
  }
}

@mixin can-point {
  @media (any-pointer) {
    @content;
  }
}

@mixin can-not-point {
  @media not (any-pointer) {
    @content;
  }
}

.test {
  @include block;
}

.can-hover {
  @include can-hover {
    @include underline;
  }
}

.can-not-hover {
  @include can-not-hover {
    @include underline;
  }
}

.can-point {
  @include can-point {
    @include underline;
  }
}

.can-not-point {
  @include can-not-point {
    @include underline;
  }
}

</style>
