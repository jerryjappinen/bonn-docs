<script setup>
import getSourceUrl from '@/util/getSourceUrl'

defineProps({
  path: {
    type: String,
    default: null
  }
})
</script>


<template>
  <ExternalLink
    class="c-source-link"
    :href="getSourceUrl(path)"
  ><slot>GitHub</slot></ExternalLink>
</template>
