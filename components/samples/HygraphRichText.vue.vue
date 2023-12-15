<script setup>
import GetPost from '@/queries/GetPost.gql'

const hygraph = useHygraph()

const { pending } = await useLazyAsyncData(() => {
  return hygraph.fetch(GetPost, {
    postSlug: 'how-i-became-an-action-hero'
  })
})

const posts = computed(() => {
  return hygraph.entriesByType.Post || []
})
</script>

<template>
  <ComponentPage
    name="RichText"
    deps="@graphcms/rich-text-html-renderer"
  >
    <h2>
      All loaded posts
      <Ellipsis v-if="pending" />
    </h2>

    <div v-if="posts.length">
      <div
        v-for="post in posts"
        :key="post.id"
        class="page-components-rich-text-post"
      >
        <h3 class="post-title">
          {{ post.title }}
        </h3>

        <template v-if="post.body && post.body.raw">
          <CustomRichText
            :content="post.body.raw"
            :references="post.body.references"
            class="page-components-rich-text-post-body"
          />
          <!-- <Dump :data="post.body.raw" /> -->
        </template>
      </div>
    </div>
  </ComponentPage>
</template>

<style lang="scss">

.page-components-rich-text-post {
  @include pad-vertical;
  @include pad-loose-horizontal;
  @include radius;
  border-width: 1px;
}

// .post-title {}

.page-components-rich-text-post-body img {
  @include radius;
}

</style>
~/stores/hygraph
