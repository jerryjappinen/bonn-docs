<script setup>
import GetPosts from '@/queries/GetPosts.gql'

import useHygraph from '@/stores/useHygraph'

const hygraph = useHygraph()

const { pending } = await useLazyAsyncData(() => {
  hygraph.fetch(GetPosts)
})

const posts = computed(() => {
  return hygraph.entriesByType.Post && hygraph.entriesByType.Post.length ? hygraph.entriesByType.Post : []
})
</script>

<template>
  <ComponentPage name="RichText">

    <h2>
      Sample data
      <Ellipsis v-if="pending" />
    </h2>

    <div v-if="posts.length">
      <div
        v-for="post in posts"
        :key="post.id"
        class="post"
      >
        {{ post.title }}
      </div>
    </div>

    <Dump :data="posts" />

  </ComponentPage>
</template>

<style lang="scss" scoped>

.post {
  @include pad;
  border-top-width: 1px;
}

</style>
