<script setup>
defineProps({
  disabled: {
    required: false
  },

  theme: {
    type: String,
    default: 'primary'
  }
})
</script>

<template>
  <ClickButton
    class="c-styled-button"
    :class="{
      ['c-styled-button-' + theme]: true,
      ['c-styled-button-' + theme + '-disabled']: disabled,
      ['c-styled-button-' + theme + '-enabled']: !disabled
    }"
    :disabled="disabled"
    :theme="theme"
  ><slot /></ClickButton>
</template>

<style lang="scss">

:root {
  --c-styled-button-primary-text-color: var(--background-color);
  --c-styled-button-primary-background-color: var(--text-color);
  --c-styled-button-primary-border-color: var(--border-color);
}

.c-styled-button-primary,
.c-styled-button-secondary,
.c-styled-button-tertiary,
.c-styled-button-transparent {
  @include pad-tight;
  @include radius;
  @include semibold;

  @include transition-medium;

  &:hover,
  &:focus {
    @include transition-fast;
  }
}

.c-styled-button-primary,
.c-styled-button-secondary,
.c-styled-button-tertiary {
  border-width: 1.5px;
}



// Primary

.c-styled-button-primary {
  background-color: var(--c-styled-button-primary-background-color);
  border-color: var(--c-styled-button-primary-background-color);
}

.c-styled-button-primary-enabled {
  color: var(--c-styled-button-primary-text-color);

  @include transparent-solid-shadow;

  &:hover,
  &:focus {
    @include solid-shadow(var(--c-styled-button-primary-border-color));
  }

}

.c-styled-button-primary-disabled {
  color: var(--dark-grey);
}



// Secondary, tertiary, transparent

.c-styled-button-secondary-disabled,
.c-styled-button-tertiary-disabled,
.c-styled-button-transparent-disabled {
  color: var(--discreet-text-color);
}

.c-styled-button-secondary {
  border-color: currentColor;
}

.c-styled-button-secondary-enabled {

  @include transparent-solid-shadow;

  &:hover,
  &:focus {
    @include solid-shadow;
  }

}

.c-styled-button-tertiary {
  border-color: var(--discreet-text-color);
}



// Link

.c-styled-button-link-enabled {
  @include link;
}

</style>
