<script setup>
// import GetPeople from '@/queries/GetPeople.gql'

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

// import useHygraph from '@/stores/useHygraph'

// const hygraph = useHygraph()

// const fetch = () => {
//   return hygraph.fetch(GetPeople)
// }
</script>

<template>
  <PiniaStorePage
    name="hygraph"
    args="options"
  >

    <!-- <p>
      <StyledButton @click="fetch">
        GetPeople
      </StyledButton>
    </p> -->

    <!-- <Dump :data="{
      apiUrl: hygraph.apiUrl,
      projectId: hygraph.projectId,
      entriesById: hygraph.entriesById
    }" /> -->

  </PiniaStorePage>
</template>
