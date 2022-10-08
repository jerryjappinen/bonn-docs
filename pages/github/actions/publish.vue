<template>
  <GithubActionPage
    name="publish"
    :args="{
      token: '${secrets.NPM_TOKEN}'
    }"
  >
    <p>Publish your repo as an npm package.</p>

    <p>Uses the version in your package.json and publishes if this version is higher than the last used one. Automatically creates a tag in the repository upon publish.</p>
  </GithubActionPage>
</template>
