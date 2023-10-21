<script setup>

defineProps({

  entry: {
    type: Object,
    required: true
  },

  contentType: {
    type: String,
    required: true
  }

})

</script>

<template>
  <div class="c-contentful-editor-user">
    ContentfulEditorUser: {{ entry.sys.id }} ({{ contentType }})
  </div>
</template>

<style lang="scss">

.c-contentful-editor-user {
  border-width: 1px;
  border-color: red;
}

</style>
