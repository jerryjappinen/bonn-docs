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
  background-color: $very-dark;
  border-color: $very-dark;
}

.c-styled-button-primary-enabled {
  color: $white;

  @include transparent-solid-shadow($very-dark);

  &:hover,
  &:focus {
    @include solid-shadow($very-dark);
  }

}

.c-styled-button-primary-disabled {
  color: $dark-grey;
}



// Secondary, tertiary, transparent

.c-styled-button-secondary-disabled,
.c-styled-button-tertiary-disabled,
.c-styled-button-transparent-disabled {
  color: $discreet-text-color;
}

.c-styled-button-secondary {
  border-color: currentColor;
}

.c-styled-button-secondary-enabled {

  @include transparent-solid-shadow($text-color);

  &:hover,
  &:focus {
    @include solid-shadow($text-color);
  }

}

.c-styled-button-tertiary {
  border-color: $discreet-text-color;
}



// Link

.c-styled-button-link-enabled {
  @include link;
}

</style>
