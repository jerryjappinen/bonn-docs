<script setup>
import GetPeople from '@/queries/GetPeople.gql'
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
      import GetPeople from '@/queries/GetPeople.gql'
      import { request } from 'graphql-request'

      const data = await request(GetPeople)
    </HighlightedPre>

    <Dump :data="GetPeople" />

    <p>
      Uses <ExternalLink href="https://www.npmjs.com/package/@rollup/plugin-graphql">@rollup/plugin-graphql</ExternalLink> under the hood and supports the same options.
    </p>
  </NuxtConfigPage>
</template>
