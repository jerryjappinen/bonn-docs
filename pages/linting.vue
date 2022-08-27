<template>
  <Bodytext>
    <h2>Preconfigured setup for <code>eslint</code> and <code>Prettier</code>.</h2>

    <p>
      Bonn includes good defaults for JavaScript, Vue and Nuxt projects. You can simply import the default configuration. <code>bonn</code> includes all the dependencies.
    </p>



    <h4>eslint</h4>

    <p>
      Includes <code>eslint</code>
    </p>

    <HighlightedPre file=".eslintrc.js">
      module.exports = require('bonn/eslint/es6.cjs')
    </HighlightedPre>

    <HighlightedPre file="package.json">
      {
        "scripts": {
          "lint": "eslint \"**/*.{js,ts}\""
        }
      }
    </HighlightedPre>



    <h4>Prettier</h4>

    <HighlightedPre file="prettier.config.js">
      module.exports = require('bonn/prettier')
    </HighlightedPre>

  </Bodytext>
</template>
