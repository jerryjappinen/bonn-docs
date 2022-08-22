<script setup>
import {
  scssPages,
  utilPages,
  componentPages,
  composablePages,
  nuxtConfigPages,
  storePages,
  styledComponentPages
} from '@/config'
</script>

<template>
  <div class="c-main-menu">
    <h3>
      <NuxtLink to="/">Bonn</NuxtLink>
    </h3>

    <ul>
      <li>
        <NuxtLink to="/" class="c-main-menu-link">
          Readme
        </NuxtLink>
      </li>

      <!-- Icons -->
      <li>
        <NuxtLink to="/icons" class="c-main-menu-link">
          Icons
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/nuxt/" class="c-main-menu-link">
          Nuxt
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/todo" class="c-main-menu-link">
          Todo
        </NuxtLink>
      </li>

    </ul>

    <!-- Scss -->
    <h3 class="c-main-menu-lib">
      <code>scss</code>
    </h3>

    <ul>
      <li>
        <NuxtLink :to="'/scss'" class="c-main-menu-link">
          <IconScssColor class="c-main-menu-icon" />
          <code>Overview</code>
        </NuxtLink>
      </li>

      <li v-for="scssPage in scssPages" :key="scssPage">
        <NuxtLink :to="'/scss/' + scssPage" class="c-main-menu-link">
          <IconScssColor class="c-main-menu-icon" />
          <code>{{ scssPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Utilities -->
    <h3 class="c-main-menu-lib">
      <code>util</code>
    </h3>

    <ul>
      <li v-for="utilPage in utilPages" :key="utilPage">
        <NuxtLink :to="'/util/' + utilPage" class="c-main-menu-link">
          <IconJavascriptColor class="c-main-menu-icon" />
          <code>{{ utilPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Components -->
    <h3 class="c-main-menu-lib">
      <code>components</code>
    </h3>

    <ul>
      <li v-for="componentPage in componentPages" :key="componentPage">
        <NuxtLink :to="`/components/${componentPage}.vue`" class="c-main-menu-link">
          <IconVueColor class="c-main-menu-icon" />
          <code>{{ componentPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Styled components -->
    <h3 class="c-main-menu-lib">
      <code>styled components</code>
    </h3>

    <ul>
      <li v-for="componentPage in styledComponentPages" :key="componentPage">
        <NuxtLink :to="`/styledComponents/${componentPage}.vue`" class="c-main-menu-link">
          <IconVueColor class="c-main-menu-icon" />
          <code>{{ componentPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Composables -->
    <h3 class="c-main-menu-lib">
      <code>composables</code>
    </h3>

    <ul>
      <li v-for="composablePage in composablePages" :key="composablePage">
        <NuxtLink :to="'/composables/' + composablePage" class="c-main-menu-link">
          <IconVue class="c-main-menu-icon" />
          <code>{{ composablePage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- nuxt.config -->
    <h3 class="c-main-menu-lib">
      <code>nuxt.config</code>
    </h3>

    <ul>
      <li v-for="nuxtConfigPage in nuxtConfigPages" :key="nuxtConfigPage">
        <NuxtLink :to="'/nuxt/config/' + nuxtConfigPage" class="c-main-menu-link">
          <IconNuxtColor class="c-main-menu-icon" />
          <code>{{ nuxtConfigPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Pinia stores -->
    <h3 class="c-main-menu-lib">
      <code>stores</code>
    </h3>

    <ul>
      <li v-for="storePage in storePages" :key="storePage">
        <NuxtLink :to="'/stores/' + storePage" class="c-main-menu-link">
          <IconPiniaColor class="c-main-menu-icon" />
          <code>{{ storePage }}</code>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

.c-main-menu-lib,
.c-main-menu-link {
  @include flex;
  @include flex-center;
}

.c-main-menu-lib {
  @include discreet;
  @include no-push-bottom;
  font-size: 1em;

  + ul {
    @include no-push-top;
  }

}

.c-main-menu-link {

  &.router-link-active {
    @include bold;
  }

  &:not(.router-link-active):not(:hover):not(:focus) {
    color: $dark-grey;
  }

}

.c-main-menu-icon {
  @include flex-fixed;
  @include push-pad-tight-right;
  width: 0.75em;
  height: 0.75em;
}

</style>
