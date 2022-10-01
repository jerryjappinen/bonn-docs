<template>
  <div>

    <h2>Breakpoints</h2>

    <div class="demo">
      <div class="breakpoint-tiny" />
      <div class="breakpoint-small" />
      <div class="breakpoint-medium" />
      <div class="breakpoint-large" />
      <div class="breakpoint-very-large" />
      <div class="breakpoint-full" />
      <div class="breakpoint-phone-tight" />
      <div class="breakpoint-phone" />
      <div class="breakpoint-tablet" />
      <div class="breakpoint-laptop" />
      <div class="breakpoint-monitor" />
    </div>

    <HighlightedPre
      lang="scss"
      code="$breakpoint-tiny: $iphone;
$breakpoint-small: 800px;
$breakpoint-medium: 960px;
$breakpoint-large: 1280px;
$breakpoint-very-large: 1440px;
$breakpoint-full: 1920px;

$breakpoint-phone-tight: $breakpoint-tiny;
$breakpoint-phone: $breakpoint-small;
$breakpoint-tablet: $breakpoint-large;
$breakpoint-laptop: $breakpoint-very-large;
$breakpoint-monitor: $breakpoint-full;"
    />

  </div>
</template>

<style lang="scss" scoped>

.demo {
  div {
    @include radius;
    @include pad;
    @include push-pad-bottom;
    @include small-font;
    @include mono;
    background-color: var(--offset-background-color);
    border-width: 1px;
  }
}

.breakpoint-tiny {
  width: $breakpoint-tiny;

  &:after {
    content: '$breakpoint-tiny: #{$breakpoint-tiny};';
  }
}
.breakpoint-small {
  width: $breakpoint-small;

  &:after {
    content: '$breakpoint-small: #{$breakpoint-small};';
  }
}
.breakpoint-medium {
  width: $breakpoint-medium;

  &:after {
    content: '$breakpoint-medium: #{$breakpoint-medium};';
  }
}
.breakpoint-large {
  width: $breakpoint-large;

  &:after {
    content: '$breakpoint-large: #{$breakpoint-large};';
  }
}
.breakpoint-very-large {
  width: $breakpoint-very-large;

  &:after {
    content: '$breakpoint-very-large: #{$breakpoint-very-large};';
  }
}
.breakpoint-full {
  width: $breakpoint-full;

  &:after {
    content: '$breakpoint-full: #{$breakpoint-full};';
  }
}
.breakpoint-phone-tight {
  width: $breakpoint-phone-tight;

  &:after {
    content: '$breakpoint-phone-tight: #{$breakpoint-phone-tight};';
  }
}
.breakpoint-phone {
  width: $breakpoint-phone;

  &:after {
    content: '$breakpoint-phone: #{$breakpoint-phone};';
  }
}
.breakpoint-tablet {
  width: $breakpoint-tablet;

  &:after {
    content: '$breakpoint-tablet: #{$breakpoint-tablet};';
  }
}
.breakpoint-laptop {
  width: $breakpoint-laptop;

  &:after {
    content: '$breakpoint-laptop: #{$breakpoint-laptop};';
  }
}
.breakpoint-monitor {
  width: $breakpoint-monitor;

  &:after {
    content: '$breakpoint-monitor: #{$breakpoint-monitor};';
  }
}

</style>
