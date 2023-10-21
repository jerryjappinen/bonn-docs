<script setup>

defineProps({
  document: {
    type: Object,
    required: true
  }
})

const entryBlockComponents = {
  editorUser: resolveComponent('ContentfulEditorUser')
}

const entryInlineComponents = {
  editorUser: resolveComponent('ContentfulEditorUser')
}
</script>

<template>
  <ContentfulRichText
    :document="document"
    :entry-block-components="entryBlockComponents"
    :entry-inline-components="entryInlineComponents"
  />
</template>
