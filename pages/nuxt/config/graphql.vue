<script setup>
import MyQuery from '@/code/MyQuery.gql'
</script>

<template>
  <NuxtConfigPage
    name="graphql"
    args="options"
  >
    <p>
      Adds support for importing <code>.gql</code> files.
    </p>

    <HighlightedPre>
      import MyQuery from '@/queries/MyQuery.gql'
      import graph from '@/util/graph'

      const data = await graph(MyQuery)
    </HighlightedPre>

    <Dump :data="MyQuery" />

    <p>
      Uses <ExternalLink href="https://www.npmjs.com/package/@rollup/plugin-graphql">@rollup/plugin-graphql</ExternalLink> under the hood and supports the same options.
    </p>
  </NuxtConfigPage>
</template>
