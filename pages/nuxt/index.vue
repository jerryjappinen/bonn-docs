<template>
  <div>
    <h2>Nuxt</h2>

    <h3>Setup</h3>

    <p>
      Add components, composables and icons to auto-imports in your Nuxt app:
    </p>

    <HighlightedPre :code="`defineNuxtConfig(bonn())`" />

    <h3>Head helpers</h3>

    <p>
      Head helpers allow setting page meta information, like page title or favicon, and other meta elements like script and link tags.
    </p>

    <p>
      Each head helper also has the equivalent config helper. You can use the same format for site-wide defaults and page-specific overrides.
    </p>

    <h3>Config helpers</h3>

    <p>
      <ExternalLink href="https://nuxt.js">
        Nuxt config
      </ExternalLink> can be quite complex and require careful orchestration when creating a non-trivial app. Bonn's Nuxt config helpers make it easy to add various features in <code>nuxt.config</code> without knowing the exact various config parameters that need to be added to enable said feature.
    </p>

    <p>
      With Bonn, you don't have to know the exact configuration format. In most cases the required dependencies are also included in the <code>bonn</code> package.
    </p>

    <p>
      Combine the configs from various helpers, and your own, with `mergeConfigs()`:
    </p>

    <HighlightedPre
      :code="`import { mergeConfigs, dev, assets, scss, svg } from 'bonn/nuxt/config'

export default defineNuxtConfig(mergeConfigs(
  assets({ /*...*/ }),
  scss({
    global: 'styles/global.scss',
    shared: 'styles/shared.scss'
  }),
  svg(),
  dev({
    typescript: {
      shim: false
    }
  })
))`"
    />
  </div>
</template>
