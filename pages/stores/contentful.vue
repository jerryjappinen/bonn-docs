<script setup>
const sampleOptions = {
  spaceId: 'abc123...',
  accessToken: 'foobar...',

  persist: false,
  orderBy: {
    person: 'fields.name',
    post: 'sys.updatedAt'
  },
  keyBy: {
    person: 'fields.slug',
    post: fields => fields.slug
  },
  groupBy: {
    person: 'fields.country'
  }
}

const sampleQuery = {
  content_type: 'game',
  limit: 3
}

const contentful = useContentful()

const fetchData = () => {
  return contentful.fetch(sampleQuery)
}
</script>

<template>
  <PiniaStorePage
    name="contentful"
    args="options"
    :args-sample="sampleOptions"
    deps="contentful-util"
  >
    <p>
      You must pass a request method that accepts 3 arguments. You can use <code>graphql-request</code>.
    </p>

    <HighlightedPre
      code="import { request } from 'graphql-request'

useHygraph({ request })"
    />

    <h2>Sample</h2>

    <h4>Store entries</h4>

    <p>
      <StyledButton @click="fetchData">
        Fetch data
      </StyledButton>
    </p>

    <Dump
      :raw="true"
      :data="{
        entryTypes: contentful.entryTypes,
        entriesById: contentful.entriesById,
        entriesByType: contentful.entriesByType,
        keyedEntries: contentful.keyedEntries,
        groupedEntries: contentful.groupedEntries
      }"
    />

    <h4>Store config values</h4>

    <Dump
      :raw="true"
      :data="{
        spaceId: contentful.spaceId,
        accessToken: contentful.accessToken,
        environment: contentful.environment,
        entriesOrderedBy: contentful.entriesOrderedBy,
        entriesKeyedBy: contentful.entriesKeyedBy
      }"
    />

    <h4>Sample query</h4>

    <Dump :data="sampleQuery" />
  </PiniaStorePage>
</template>
