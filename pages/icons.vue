<script setup>
// import iconIds from 'bonn/iconIds'
import iconSheet from 'bonn/iconSheet'

const codeSample = '<IconFigma /><IconCheck />'
</script>

<template>
  <div>
    <h2>Icons</h2>

    <Bodytext>
      <p>
        Generic SVG icon set. Can be replaced with your custom icon set either fully or partly.
      </p>

      <p>
        See full icon set at <ExternalLink href="https://github.com/jerryjappinen/bonn/icons">
          github.com/jerryjappinen/bonn/icons
        </ExternalLink>.
      </p>
    </Bodytext>

    <h3>Using individual icons</h3>

    <HighlightedPre
      :code="codeSample"
      lang="html"
    />

    <!-- I want to use the Icon assets in some standardised way -->
    <p>
      <Icon>
        <IconFigma />
      </Icon>

      <Icon>
        <IconCheck />
      </Icon>

      <Icon>
        <IconCheck />
      </Icon>
    </p>

    <h3>Installation details</h3>

    <p>
      Some Vue components rely on SVG icon assets. Since these are user-configurable, you must choose where to get them (or manually use the defaults from `bonn/icons`). Bonn assumes you import SVG icons as Vue components (using `vite-svg-loader`, for example). This can be easily done using a Nuxt config helper in your Nuxt project.
    </p>

    <p>To completely replace the default icon set, provide the icons required by <code>bonn/components/</code></p>

    <p>
      <Icon>
        <IconCheck />
      </Icon>

      <Icon>
        <IconChevronDown />
      </Icon>

      <Icon>
        <IconCross />
      </Icon>

      <Icon>
        <IconUndo />
      </Icon>
    </p>

    <h3>Full icon sheet</h3>

    <p>
      Import <code>bonn/icons</code>, <code>bonn/iconSheet</code> or <code>bonn/iconIds</code> to get the full list of icons.
    </p>

    <div class="icon-grid">
      <div
        v-for="(iconSvg, key) in iconSheet"
        :key="key"
        class="icon-grid-cell"
      >
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div
          class="icon-grid-cell-svg"
          v-html="iconSvg"
        />
        <div class="icon-grid-cell-key">
          {{ key }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.icon-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-gap: 0.4em;
}

.icon-grid-cell {
  @include pad-even;
  @include pad-loose-top;
  text-align: center;
  overflow: hidden;
  @include radius-tight;
  background-color: var(--offset-background-color);
}

.icon-grid-cell-svg {
  @include keep-center;
  width: 2em;
  height: 2em;
}

.icon-grid-cell-key {
  @include push-tight-top;
  font-family: monospace;
  font-size: 0.75em;
}

</style>
