<script setup>
import GetPeople from '@/queries/GetPeople.gql'

import useHygraph from '@/stores/useHygraph'

const sampleOptions = {
  request (baseUrl, query, variables) {
    // ...
  },

  projectId: 'abc123...',
  persist: false,
  orderBy: {
    Person: 'name',
    Post: 'publishedAt'
  },
  keyBy: {
    Person: 'slug',
    Post: 'slug'
  },
  groupBy: {
    Person: 'country'
  }
}

const hygraph = useHygraph()

const fetchPeople = () => {
  return hygraph.fetch(GetPeople)
}
</script>

<template>
  <PiniaStorePage
    name="hygraph"
    args="options"
    :arg-samples="sampleOptions"
    deps="graphql-request"
  >

    <p>
      You must pass a request method that accepts 3 arguments. You can use <code>graphql-request</code>.
    </p>

    <HighlightedPre code="import { request } from 'graphql-request'

useHygraph({ request })" />

    <!-- <h4>Setup</h4>

    <Dump
      :raw="true"
      :data="setup(sampleOptions)"
    /> -->

    <h2>Sample</h2>

    <h4>Store entries</h4>

    <p>
      <StyledButton @click="fetchPeople">
        GetPeople
      </StyledButton>
    </p>

    <Dump
      :raw="true"
      :data="{
        entryTypes: hygraph.entryTypes,
        entriesById: hygraph.entriesById,
        entriesByType: hygraph.entriesByType,
        keyedEntries: hygraph.keyedEntries,
        groupedEntries: hygraph.groupedEntries
      }"
    />

    <h4>Store config values</h4>

    <Dump
      :raw="true"
      :data="{
        apiUrl: hygraph.apiUrl,
        projectId: hygraph.projectId,
        environment: hygraph.environment,
        entriesOrderedBy: hygraph.entriesOrderedBy,
        entriesKeyedBy: hygraph.entriesKeyedBy
      }"
    />

    <h4>Sample query</h4>

    <Dump :data="GetPeople" />

  </PiniaStorePage>
</template>
