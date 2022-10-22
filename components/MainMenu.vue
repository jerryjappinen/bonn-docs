<script setup>
import {
  componentPages,
  composablePages,
  githubActionPages,
  nuxtConfigPages,
  nuxtHeadPages,
  nuxtPluginPages,
  scssPages,
  storePages,
  styledComponentPages,
  utilPages,
  vercelPages,
  vercelEndpointPages
} from '@/config'
</script>

<template>
  <div class="c-main-menu">
    <h4>
      <NuxtLink to="/">
        Bonn
      </NuxtLink>
    </h4>

    <ul>
      <li>
        <NuxtLink to="/" class="c-main-menu-link">
          Readme
        </NuxtLink>
      </li>

      <li>
        <NuxtLink to="/linting" class="c-main-menu-link">
          Linting
        </NuxtLink>
      </li>

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
        <NuxtLink to="/test" class="c-main-menu-link">
          Test
        </NuxtLink>
      </li>

      <li>
        <SourceLink class="c-main-menu-link">
          GitHub <Icon><IconExternal /></Icon>
        </SourceLink>
      </li>
    </ul>

    <!-- Scss -->
    <h4 class="c-main-menu-lib">
      SCSS
    </h4>

    <ul>
      <li v-for="scssPage in scssPages" :key="scssPage">
        <NuxtLink :to="'/scss/' + scssPage" class="c-main-menu-link">
          <IconScssColor class="c-main-menu-icon" />
          <code>{{ scssPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Components -->
    <h4 class="c-main-menu-lib">
      Components
    </h4>

    <ul>
      <li v-for="componentPage in componentPages" :key="componentPage">
        <NuxtLink :to="`/components/${componentPage}.vue`" class="c-main-menu-link">
          <IconVueColor class="c-main-menu-icon" />
          <code>{{ componentPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Styled components -->
    <h4 class="c-main-menu-lib">
      Styled components
    </h4>

    <ul>
      <li v-for="componentPage in styledComponentPages" :key="componentPage">
        <NuxtLink :to="`/styledComponents/${componentPage}.vue`" class="c-main-menu-link">
          <IconVueColor class="c-main-menu-icon" />
          <code>{{ componentPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Composables -->
    <h4 class="c-main-menu-lib">
      Composables
    </h4>

    <ul>
      <li v-for="composablePage in composablePages" :key="composablePage">
        <NuxtLink :to="'/composables/' + composablePage" class="c-main-menu-link">
          <IconVue class="c-main-menu-icon" />
          <code>{{ composablePage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- nuxt head -->
    <h4 class="c-main-menu-lib">
      Nuxt head
    </h4>

    <ul>
      <li v-for="nuxtHeadPage in nuxtHeadPages" :key="nuxtHeadPage">
        <NuxtLink :to="'/nuxt/head/' + nuxtHeadPage" class="c-main-menu-link">
          <IconNuxtColor class="c-main-menu-icon" />
          <code>{{ nuxtHeadPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- nuxt.config -->
    <h4 class="c-main-menu-lib">
      nuxt.config
    </h4>

    <ul>
      <li v-for="nuxtConfigPage in nuxtConfigPages" :key="nuxtConfigPage">
        <NuxtLink :to="'/nuxt/config/' + nuxtConfigPage" class="c-main-menu-link">
          <IconNuxtColor class="c-main-menu-icon" />
          <code>{{ nuxtConfigPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Nuxt plugins -->
    <h4 class="c-main-menu-lib">
      Nuxt plugins
    </h4>

    <ul>
      <li v-for="nuxtPluginPage in nuxtPluginPages" :key="nuxtPluginPage">
        <NuxtLink :to="'/nuxt/plugins/' + nuxtPluginPage" class="c-main-menu-link">
          <IconNuxt class="c-main-menu-icon" />
          <code>{{ nuxtPluginPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Pinia stores -->
    <h4 class="c-main-menu-lib">
      Stores
    </h4>

    <ul>
      <li v-for="storePage in storePages" :key="storePage">
        <NuxtLink :to="'/stores/' + storePage" class="c-main-menu-link">
          <IconPiniaColor class="c-main-menu-icon" />
          <code>{{ storePage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Utilities -->
    <h4 class="c-main-menu-lib">
      Utilities
    </h4>

    <ul>
      <li v-for="utilPage in utilPages" :key="utilPage">
        <NuxtLink :to="'/util/' + utilPage" class="c-main-menu-link">
          <IconJavascriptColor class="c-main-menu-icon" />
          <code>{{ utilPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Vercel -->
    <h4 class="c-main-menu-lib">
      Vercel
    </h4>

    <ul>
      <li v-for="vercelPage in vercelPages" :key="vercelPage">
        <NuxtLink :to="'/vercel/' + vercelPage" class="c-main-menu-link">
          <IconVercel class="c-main-menu-icon" />
          <code>{{ vercelPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- Vercel -->
    <h4 class="c-main-menu-lib">
      Vercel endpoints
    </h4>

    <ul>
      <li v-for="vercelEndpointPage in vercelEndpointPages" :key="vercelEndpointPage">
        <NuxtLink :to="'/vercel/endpoints/' + vercelEndpointPage" class="c-main-menu-link">
          <IconVercel class="c-main-menu-icon" />
          <code>{{ vercelEndpointPage }}</code>
        </NuxtLink>
      </li>
    </ul>

    <!-- GitHub -->
    <h4 class="c-main-menu-lib">
      GitHub actions
    </h4>

    <ul>
      <li v-for="githubAction in githubActionPages" :key="githubAction">
        <NuxtLink :to="'/github/actions/' + githubAction" class="c-main-menu-link">
          <IconGithub class="c-main-menu-icon" />
          <code>{{ githubAction }}</code>
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
  // @include discreet;
  @include push-tight-bottom(0.5);
  @include small-font;

  + ul {
    @include no-push-top;
  }

}

.c-main-menu-link {

  &.router-link-active {
    @include bold;
  }

  // Link color
  color: var(--dark-grey);

  @include dark {
    color: var(--discreet-text-color);
  }

  &.router-link-active,
  &:hover,
  &:focus {
    color: inherit;
  }

}

.c-main-menu-icon {
  @include flex-fixed;
  @include push-pad-tight-right;
  width: 0.75em;
  height: 0.75em;
}

</style>
