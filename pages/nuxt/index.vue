<template>
  <div>
    <h2>Nuxt</h2>

    <h3>Auto imports</h3>

    <p>
      You can easily auto-import the components, composables and icons in your Nuxt app:
    </p>

    <HighlightedPre :code="`defineNuxtConfig(bonn())`" />

    <h3>Head helpers</h3>

    <p>
      Head helpers allow setting page meta information, like page title or favicon, and other meta elements like script and link tags.
    </p>

    <p>
      Each head helper also has the equivalent config helper. This way, you can use the same format to use site-wide defaults and page-specific overrides to titles, favicons and others.
    </p>

    <h3>Config helpers</h3>

    <p>
      <ExternalLink href="https://nuxt.js">
        Nuxt config
      </ExternalLink> can be quite complex and require careful orchestration when creating a non-trivial app. Bonn's Nuxt config helpers make it easy to add various features in <code>nuxt.config</code> without knowing the exact various config parameters that need to be added to enable said feature.
    </p>

    <p>
      For example, to enable SCSS in your Nuxt app, you can simply use the <NuxtLink href="/nuxt/config/scss">
        scss helper
      </NuxtLink>.
    </p>

    <HighlightedPre
      :code="`export default defineNuxtConfig(scss({
  global: 'stylehels/global.scss',
  shared: 'styles/shared.scss'
}))`"
    />

    <p>
      This helper will enable the required modules and add the relevant options in your Nuxt config. You don't have to know the exact format, the helper will take care of it. In most cases the required dependencies are also included in the <code>bonn</code> package.
    </p>

    <p>
      You will of course want to combine all these configs. Use `mergeConfigs()` to achieve this:
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
