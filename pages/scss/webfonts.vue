<template>
  <div>
    <Bodytext>
      <h2>Webfonts</h2>

      <h4>Google Fonts</h4>

      <h5>nuxt.config</h5>

      <p>
        The easiest way to implement Google Fonts is using the <code>nuxt.config</code> helper <NuxtLink to="/nuxt/config/googleFonts">
          googleFonts()
        </NuxtLink>.
      </p>

      <HighlightedPre
        file="nuxt.config.ts"
        code="googleFonts('Poppins', 'Dosis')"
      />

      <h5>In SCSS</h5>

      <p>
        Or add the `import` code in your global style sheets:
      </p>

      <HighlightedPre
        file="my-styles.scss"
        code="@import url('https://fonts.googleapis.com/css2?family=Dosis&display=swap');"
      />

      <h4>Custom web fonts</h4>

      <h5>nuxt.config</h5>

      <h5>In SCSS</h5>

      <p>
        If you're using the <code>scss</code> default styles, any web fonts added to the <code>$webfonts</code> variable will be loaded.
      </p>

      <pre><code>$webfonts: (
    (
      font-family: 'Source Sans Pro',
      font-weight: 400,
      font-style: normal,
      path: 'source-sans/sourcesanspro-regular-webfont',
    ),
    (
      font-family: 'Source Sans Pro',
      font-weight: 400,
      font-style: italic,
      path: 'source-sans/sourcesanspro-italic-webfont',
    ),
    (
      font-family: 'Source Sans Pro',
      font-weight: 700,
      font-style: normal,
      path: 'source-sans/sourcesanspro-bold-webfont',
    ),
    (
      font-family: 'Source Sans Pro',
      font-weight: 700,
      font-style: italic,
      path: 'source-sans/sourcesanspro-bolditalic-webfont',
    ),
  );
  </code></pre>

      <p>
        Loading will be done using the <code>font-face</code> mixin, which you can also use manually:
      </p>

      <pre><code>@include font-face(
    $font-family,
    $font-weight,
    $font-style,
    $filepath,
    $woffdata: null,
    $woff2data: null
  )</code></pre>
    </Bodytext>
  </div>
</template>
