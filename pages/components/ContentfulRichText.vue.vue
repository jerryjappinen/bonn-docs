<script setup>
const sampleQuery = {
  content_type: 'snippet',
  limit: 20
}

const contentful = useContentful()

const fetchData = () => {
  return contentful.fetch(sampleQuery)
}

const richTextDoc = computed(() => {
  if (contentful.entriesByType.snippet && contentful.entriesByType.snippet.length) {
    for (let i = 0; i < contentful.entriesByType.snippet.length; i++) {
      const snippet = contentful.entriesByType.snippet[i]
      if (snippet.fields.bodyRich) {
        return snippet.fields.bodyRich
      }
    }
  }

  return null
})

onMounted(fetchData)
</script>

<template>
  <ComponentPage name="ContentfulRichText">
    <div v-if="contentful.entriesByType.snippet && contentful.entriesByType.snippet.length">
      <p>
        Snippets loaded: {{ contentful.entriesByType.snippet.length }}
      </p>

      <div
        v-if="richTextDoc"
        class="debug"
      >
        <MyContentfulRichText :document="richTextDoc" />
      </div>
    </div>

    <Dump :data="contentful.entriesByType.snippet" />
  </ComponentPage>
</template>

<style lang="scss" scoped>

.debug {
  border-width: 1px;
  border-color: green;
  padding: 1em;
}

</style>
~/stores/contentful
