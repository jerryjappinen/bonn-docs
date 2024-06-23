<template>
  <VercelEndpointPage
    name="googleSheet"
    args="options"
    example-paths="googleSheetExample"
  >
    <Bodytext>
      <p>Pass either the <code>sheetId</code> OR <code>shareId</code>, and other options to fetch the sheet:</p>
    </Bodytext>

    <HighlightedPre
      :code="`const options = {
  sheetId, // This is the public ID seen in URL bar
  shareId, // This is the link you get from the share dialog
  headersIncluded // Set to true if the sheet has a header row
}`"
    />
  </VercelEndpointPage>
</template>
