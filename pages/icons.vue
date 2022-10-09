<script setup>
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

    <HighlightedPre :code="codeSample" lang="html" />

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

    <h3>Icons required by <code>bonn/components/</code></h3>

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
  </div>
</template>
