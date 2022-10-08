<template>
  <GithubActionPage
    name="run"
    :args="{
      script: 'lint'
    }"
  >
    <p>Run an npm script in your workflow.</p>
  </GithubActionPage>
</template>
