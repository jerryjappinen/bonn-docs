<template>
  <Bodytext>
    <h2>Preconfigured setup for <code>eslint</code> and <code>Prettier</code>.</h2>

    <h4>eslint</h4>

    <p>
      <code>.eslintrc.js</code>
    </p>

    <HighlightedPre file=".eslintrc.js">
      module.exports = require('bonn/eslint/es6.cjs')
    </HighlightedPre>



    <h4>Prettier</h4>

    <p>
      <code>prettier.config.js</code>
    </p>

    <HighlightedPre file="prettier.config.js">
      module.exports = require('bonn/prettier')
    </HighlightedPre>

  </Bodytext>
</template>
