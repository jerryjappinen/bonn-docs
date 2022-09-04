<script setup>
import GetPeople from '@/queries/GetPeople.gql'

// import useHygraph from '@/stores/useHygraph'
// import { hygraph } from 'bonn/stores/setup'
import hygraph from '../../../bonn/stores/setup/hygraph'

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

// const hygraph = useHygraph()

// const dump = computed(() => {
//   return {
//     // apiUrl: hygraph.apiUrl,
//     // projectId: hygraph.projectId,
//     // entriesById: hygraph.entriesById,

//     // request: typeof request,
//     // unwrap: typeof unwrap
//   }
// })

const fetchPeople = () => {
  // return hygraph.fetch(GetPeople)
}
</script>

<template>
  <PiniaStorePage
    name="hygraph"
    args="options"
    :arg-samples="sampleOptions"
  >

    <Dump :data="hygraph({
      projectId: 'b4858899559a47279f1caba58a9c1a30'
    })" />

    <h4>Sample query</h4>

    <p>
      <StyledButton @click="fetchPeople">
        GetPeople
      </StyledButton>
    </p>

    <Dump :data="GetPeople" />

  </PiniaStorePage>
</template>
