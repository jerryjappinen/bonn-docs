<script setup>
import GetPeople from '@/queries/GetPeople.gql'

import useHygraph from '@/stores/useHygraph'

// import setup from '../../../bonn/stores/setup/hygraph'

const sampleOptions = {
  projectId: 'abc123...',
  persist: false,
  orderBy: {
    Person: 'name',
    Post: 'publishedAt'
  },
  keyBy: {
    Person: 'slug',
    Post: 'slug'
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
  >


    <!-- <h4>Setup</h4>

    <Dump
      :raw="true"
      :data="setup(sampleOptions)"
    /> -->

    <h4>Store</h4>

    <p>
      {{ typeof hygraph }}
    </p>

    <Dump
      :raw="true"
      :data="{
        apiUrl: hygraph.apiUrl,
        projectId: hygraph.projectId,
        environment: hygraph.environment,
        entriesOrderedBy: hygraph.entriesOrderedBy,
        entriesKeyedBy: hygraph.entriesKeyedBy,

        // Entry data
        entriesById: hygraph.entriesById
      }"
    />

    <h4>Sample query</h4>

    <p>
      <StyledButton @click="fetchPeople">
        GetPeople
      </StyledButton>
    </p>

    <Dump :data="GetPeople" />

  </PiniaStorePage>
</template>
