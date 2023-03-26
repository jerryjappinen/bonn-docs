<script setup>
defineProps({
  sourcePath: {
    type: String,
    default: null
  }
})
</script>

<template>
  <div class="c-crumbs">
    <slot />

    <template v-if="sourcePath">
      <Spacer />

      <SourceLink :path="sourcePath">
        GitHub <Icon><IconGithub /></Icon>
      </SourceLink>
    </template>
  </div>
</template>

<style lang="scss">

.c-crumbs {
  @include flex;
  @include flex-center;
  @include discreet;

  .c-icon {
    margin-right: 0.4em;
  }

  .c-source-link {
    @include flex;
    @include flex-center;

    .c-icon {
      margin-right: 0;
      margin-left: 0.4em;
    }

  }

}

</style>
