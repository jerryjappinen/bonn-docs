<script setup>
import hygraphRequest from '@/util/hygraphRequest'

import GetPosts from '@/queries/GetPosts.gql'

const posts = ref([])

const onFetch = async () => {
  const data = await hygraphRequest(GetPosts)

  posts.value = data
}

const isExpanded = ref(false)
</script>

<template>
  <div class="page-test">
    <h2>Sandbox page</h2>

    <h4>Rich text</h4>

    <p>
      <StyledButton @click="onFetch">Fetch posts</StyledButton>
    </p>

    <Dump :data="posts" />

  </div>
</template>

<style lang="scss">

// .page-test {
//   color: v(red);
// }

</style>
