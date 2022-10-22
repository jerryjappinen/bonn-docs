<template>
  <VercelEndpointPage
    name="contentfulEntries"
    args="contentfulClientOptions"
  >
    <Bodytext>
      <p>Fetch Contentful entries. Pass these options to connect to your space:</p>
    </Bodytext>

    <HighlightedPre
      :code="`const options = {
  spaceId, // required
  environment,
  accessToken, // required
  previewAccessToken
}`"
    />
  </VercelEndpointPage>
</template>
