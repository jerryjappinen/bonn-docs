<script setup>
const packageJsonCode = `{
  "scripts": {
    "lint": "eslint --ignore-path .gitignore \\"**/*.{js,ts}\\""
  }
}`

const packageJsonCodeVue = `{
  "scripts": {
    "lint": "eslint --ignore-path .gitignore \\"**/*.{js,ts,vue}\\""
  }
}`
</script>

<template>
  <Bodytext>
    <h2>Preconfigured setup for <code>eslint</code> and <code>Prettier</code>.</h2>

    <p>
      Bonn includes good defaults for JavaScript, Vue and Nuxt projects. You can simply import the default configuration. <code>bonn</code> includes all the dependencies.
    </p>

    <h4>eslint</h4>

    <p>
      <code>eslint</code> and plugins are already included as dependencies.
    </p>

    <HighlightedPre
      file=".eslintrc.js"
      code="module.exports = require('bonn/eslint/es6.cjs')"
    />

    <HighlightedPre
      file="package.json"
      :code="packageJsonCode"
    />

    <p>
      For Nuxt projects:
    </p>

    <HighlightedPre
      file=".eslintrc.js"
      code="module.exports = require('bonn/eslint/nuxt.cjs')"
    />

    <HighlightedPre
      file="package.json"
      :code="packageJsonCodeVue"
    />

    <h4>Prettier</h4>

    <p>
      <code>prettier</code> is already included as dependency.
    </p>

    <HighlightedPre
      file="prettier.config.js"
      code="module.exports = require('bonn/prettier')"
    />
  </Bodytext>
</template>
